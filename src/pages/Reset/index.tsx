import React from 'react'
import { Bottom, Contain, FormContent, Logo } from './index.style'
import { Button, Card, Divider, Form, Input, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

export interface ResetPageProps {}

export const ResetPage: React.FC<ResetPageProps> = ({}) => {
  return (
    <Contain>
      <Space style={{ width: '100%', justifyContent: 'center' }}>
        <Logo src="//saber2pr.top/MyWeb/resource/image/todolist-logo.png" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Todolist TreeView
        </Typography.Title>
      </Space>
      <Card
        title="Reset Password"
        style={{
          width: '400px',
          margin: '36px auto',
          boxShadow: '0 10px 20px rgba(0, 0, 0, .2)',
        }}
      >
        <FormContent>
          <Form layout="vertical">
            <Form.Item
              name="email"
              label="Email address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Email address you use to sign up." />
            </Form.Item>
          </Form>
          <Button block type="primary">
            Get Password Reset Code
          </Button>
        </FormContent>
      </Card>
      <Bottom>
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Back to Sign In
        </Link>
      </Bottom>
    </Contain>
  )
}
