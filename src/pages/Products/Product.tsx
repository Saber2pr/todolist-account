import { Card, Descriptions, Divider, Tag, Typography } from 'antd'
import React from 'react'
import { Footer, Img } from './index.style'
import { useFormModal } from '@/hooks/useFormModal'

export interface ProductProps {
  img: string
  title: string
  description: string
  price: string
}

export const Product: React.FC<ProductProps> = ({
  img,
  title,
  description,
  price,
}) => {
  const api = useFormModal({
    title,
    modalProps: {
      maskClosable: false,
      closable: false,
      okText: 'Accept',
      centered: true,
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
    onOk() {},
  })
  return (
    <>
      <Card
        hoverable
        cover={<Img src={img} />}
        onClick={() => api.setShow(true)}
      >
        <Card.Meta
          title={title}
          description={
            <>
              <Typography.Paragraph ellipsis={{ rows: 1 }}>
                {description}
              </Typography.Paragraph>
              <Footer>
                <div style={{ flexGrow: 1 }}></div>
                <Tag.CheckableTag checked>GET</Tag.CheckableTag>
              </Footer>
            </>
          }
        />
      </Card>
      {api.modal}
    </>
  )
}
