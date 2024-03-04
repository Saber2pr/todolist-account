import React from 'react'
import { Contain, Img } from './index.style'
import { Card, Col, Divider, Image, Row, Typography } from 'antd'
import { useFormModal } from '@/hooks/useFormModal'
import { Product } from './Product'
import { VipProducts } from '@/api'

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
            short="Get the professional version"
            id={VipProducts.TodolistTreeViewPro}
            description={
              <>
                <div>Get the professional version, which includes:</div>
                <div>1. Advanced features of the Vscode extension</div>
                <div>2. TodolistTreeView cross-platform desktop app</div>
                <div>3. Cloud service support for subsequent plans</div>
              </>
            }
            price="5$/mo"
          />
        </Col>
      </Row>
    </Contain>
  )
}
