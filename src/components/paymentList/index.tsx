import { Alert, Button, Space, Table, Tag, Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'

import { GetProductPayments } from '@/api/interface'
import { getProductCheckout, getProductPayments } from '@/api/vip'
import { useAsync } from '@/hooks/useAsync'
import { getArray } from '@/utils'

import { Contain } from './index.style'

export interface PaymentListProps {}

const StatusColor = {
  pending: 'unset',
  active: 'green',
  inactive: 'gray',
}

const CheckoutButton: React.FC<{
  refreshList: () => Promise<any>
  transactionId: string
}> = ({ refreshList, transactionId }) => {
  const { loading: checkLoading, run: checkoutOrder } = useAsync(
    async (orderId) => {
      await getProductCheckout(orderId)
      await refreshList()
    },
    [transactionId],
    {
      manual: true,
    },
  )

  return (
    <Button
      type="link"
      loading={checkLoading}
      onClick={async () => {
        checkoutOrder(transactionId)
      }}
    >
      Refresh
    </Button>
  )
}

const PageSize = 10

export const PaymentList: React.FC<PaymentListProps> = ({}) => {
  const [current, setCurrent] = useState(0)

  const {
    loading,
    data,
    run: refreshList,
  } = useAsync(async () => {
    const payments = await getProductPayments(current * PageSize, PageSize)
    return payments
  }, [current])

  const columns: ColumnsType<GetProductPayments['response'][0]> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'TxnDate',
      dataIndex: 'txnDate',
    },
    {
      title: 'TransactionId',
      dataIndex: 'transactionId',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (value) => {
        if (typeof value !== 'string') return <span>Unknown</span>
        return (
          <Tag.CheckableTag checked style={{ background: StatusColor[value] }}>
            {value.toUpperCase()}
          </Tag.CheckableTag>
        )
      },
    },
    {
      title: 'Operate',
      render: (_, record) => {
        const item = getArray(record?.paymentLinks).find(
          (item) => item.rel === 'approve',
        )
        if (!item) return <span>None approve link</span>
        if (record?.isTxnSuccessful) {
          return <span>Completed</span>
        }
        return (
          <Space>
            <a target="_blank" href={item?.href}>
              Approve
            </a>
            <CheckoutButton
              refreshList={refreshList}
              transactionId={record?.transactionId}
            />
          </Space>
        )
      },
    },
  ]

  if (data?.count === 0) {
    return <></>
  }

  return (
    <Contain>
      <Typography.Title level={5}>Payment Order</Typography.Title>
      <Table
        loading={loading}
        rowKey="id"
        columns={columns}
        dataSource={getArray(data?.response)}
        pagination={{
          current: current + 1,
          total: data?.count,
          pageSize: PageSize,
          hideOnSinglePage: true,
          onChange(page) {
            setCurrent(page - 1)
          },
        }}
      />
      <Alert
        style={{ marginTop: 16 }}
        type="info"
        message="Payment completed but no changes? Try to click Refresh"
      />
    </Contain>
  )
}
