import { Button, Space, Table, Tag, Typography } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

import { GetProductPayments } from '@/api/interface'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { getArray } from '@/utils'

import { Contain } from './index.style'
import { getProductCheckout, getProductPayments } from '@/api/vip'
import { useAsync } from '@/hooks/useAsync'
import { commonSlice } from '@/store/common'

export interface PaymentListProps {}

export const PaymentList: React.FC<PaymentListProps> = ({}) => {
  const payments = useAppSelector((state) => state?.common?.payments)
  const dispatch = useAppDispatch()

  const { loading, run: checkoutOrder } = useAsync(
    async (orderId) => {
      await getProductCheckout(orderId)
      const payments = await getProductPayments(0, 10)
      dispatch(commonSlice.actions.setPayments(getArray(payments?.response)))
    },
    [],
    {
      manual: true,
    },
  )

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
      title: 'IsTxnSuccessful',
      dataIndex: 'isTxnSuccessful',
      render: (value) => (
        <Tag.CheckableTag
          checked
          style={{ background: value ? 'green' : 'gray' }}
        >
          {value ? 'YES' : 'NO'}
        </Tag.CheckableTag>
      ),
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
            <Button
              type="link"
              loading={loading}
              onClick={async () => {
                checkoutOrder(record?.transactionId)
              }}
            >
              Refresh
            </Button>
          </Space>
        )
      },
    },
  ]

  if (getArray(payments).length === 0) {
    return <></>
  }

  return (
    <Contain>
      <Typography.Title level={5}>Payment Order</Typography.Title>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={getArray(payments)}
        pagination={false}
      />
    </Contain>
  )
}
