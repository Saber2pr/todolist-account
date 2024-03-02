import React from 'react'
import { Contain } from './index.style'
import { Divider, Space, Typography } from 'antd'
import { Logo } from '../confirmReset/index.style'

export interface AboutPageProps {}

export const AboutPage: React.FC<AboutPageProps> = ({}) => {
  return (
    <Contain>
      <Space style={{ width: '100%' }}>
        <Logo src="//saber2pr.top/MyWeb/resource/image/todolist-logo.png" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Todolist TreeView
        </Typography.Title>
      </Space>
      <Divider />
    </Contain>
  )
}
