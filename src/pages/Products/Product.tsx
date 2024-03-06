import {
  Badge,
  Card,
  Descriptions,
  Divider,
  Modal,
  Tag,
  Typography,
  message,
} from 'antd'
import React, { useEffect } from 'react'
import { Footer, Img } from './index.style'
import { useFormModal } from '@/hooks/useFormModal'
import { getProduct } from '@/api/vip'
import { VipProducts, getToken } from '@/api'
import { getArray } from '@/utils'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { commonSlice } from '@/store/common'
import { SmileOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

export interface ProductProps {
  id: string
  img: string
  title: string
  short: string
  description: React.ReactNode
  price: string
  disabled?: boolean
}

export const Product: React.FC<ProductProps> = ({
  id,
  img,
  title,
  description,
  price,
  short,
}) => {
  const product = useAppSelector((state) => state?.common?.product)

  const navigate = useNavigate()

  const hasProduct = !!product?.id

  const isActive = product?.status === 'ACTIVE'

  const dispatch = useAppDispatch()
  const api = useFormModal({
    title,
    modalProps: {
      maskClosable: false,
      closable: false,
      okText: 'Accept',
      centered: true,
      width: 600,
    },
    forms: (
      <>
        <Img src={img} />
        <Divider />
        <Descriptions
          labelStyle={{
            width: 100,
          }}
          bordered
          column={1}
        >
          <Descriptions.Item label="Product">{title}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {description}
          </Descriptions.Item>
          <Descriptions.Item label="Price">{price}</Descriptions.Item>
        </Descriptions>
      </>
    ),
    initValues: null,
    async onOk() {
      if (isActive) {
        message.info('You have already got this product')
        return
      }
      dispatch(
        commonSlice.actions.setLoading({
          loading: true,
          text: 'Get Product Payment Details ...',
        }),
      )
      const res = await getProduct(VipProducts.TodolistTreeViewPro)
      const item = getArray(res?.paypalLinks).find(
        (item) => item.rel === 'approve',
      )
      if (item) {
        location.href = item.href
      } else {
        message.error('Product not found')
      }
    },
  })
  return (
    <Badge.Ribbon text="New" color="volcano">
      <Card
        hoverable
        cover={<Img src={img} />}
        onClick={() => {
          if (!hasProduct) {
            message.error(
              'The product is temporarily not available for purchase',
            )
            return
          }
          if (getToken()) {
            api.setShow(true)
          } else {
            message.info('Please sign in first')
            navigate('/login')
          }
        }}
      >
        <Card.Meta
          title={title}
          description={
            <>
              <Typography.Paragraph ellipsis={{ rows: 1 }}>
                {short}
              </Typography.Paragraph>
              <Footer>
                <div>{price}</div>
                {product && (
                  <Tag.CheckableTag checked>
                    {isActive ? 'ACCEPTED' : 'GET'}
                  </Tag.CheckableTag>
                )}
              </Footer>
            </>
          }
        />
      </Card>
      {api.modal}
    </Badge.Ribbon>
  )
}
