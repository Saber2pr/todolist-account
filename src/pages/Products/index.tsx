import React from 'react'
import { Contain, Img } from './index.style'
import { Card, Col, Divider, Image, Row, Typography } from 'antd'
import { useFormModal } from '@/hooks/useFormModal'
import { Product } from './Product'

export interface ProductsPageProps {}

export const ProductsPage: React.FC<ProductsPageProps> = ({}) => {
  return (
    <Contain>
      <Typography.Title>Products</Typography.Title>
      <Typography.Paragraph>
        Click on the card below to view details.
      </Typography.Paragraph>
      <Divider />
      <Row>
        <Col span={6}>
          <Product
            img="//saber2pr.top/MyWeb/resource/image/todolist-logo.png"
            title="TodolistTreeView Pro"
            description="Get the professional version, which includes advanced features of the Vscode extension, TodolistTreeView cross-platform desktop app, and cloud service support for subsequent plans."
            price="5$/mo"
          />
        </Col>
      </Row>
    </Contain>
  )
}
