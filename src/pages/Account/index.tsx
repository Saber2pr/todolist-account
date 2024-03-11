import { Card, Descriptions, Divider, Space, Tag, Typography } from 'antd'
import React from 'react'

import { useHasProduct } from '@/hooks/useHasProduct'
import { useAppSelector } from '@/store/store'
import { formatTimeStr } from '@/utils/date'

import { Logo } from '../confirmReset/index.style'
import { Contain } from './index.style'

export interface AccountPageProps {}

export const AccountPage: React.FC<AccountPageProps> = ({}) => {
  const isActive = useHasProduct()
  const data = useAppSelector((state) => state?.common?.userInfo)

  return (
    <Contain>
      <Space style={{ width: '100%' }}>
        <Logo src="//saber2pr.top/MyWeb/resource/image/todolist-logo.png" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Todolist TreeView
        </Typography.Title>
      </Space>
      <Divider />
      {data?.username && (
        <Typography.Paragraph>Dear {data?.username} ~</Typography.Paragraph>
      )}
      <Card title="Your Account">
        <Descriptions bordered column={1}>
          <Descriptions.Item label="UserId">
            {data?.id || '-'}
          </Descriptions.Item>
          <Descriptions.Item label="Username">
            {data?.username || '-'}
          </Descriptions.Item>
          <Descriptions.Item label="email">
            {data?.email || '-'}
          </Descriptions.Item>
          <Descriptions.Item label="First Login">
            {formatTimeStr(data?.createdAt)}
          </Descriptions.Item>
          {isActive && (
            <Descriptions.Item label="Product">
              <Tag.CheckableTag checked>TodolistTreeViewPro</Tag.CheckableTag>
            </Descriptions.Item>
          )}
        </Descriptions>
      </Card>
    </Contain>
  )
}
