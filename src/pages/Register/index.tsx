import React from 'react'
import { Bottom, Contain, FormContent, Logo } from './index.style'
import { Button, Card, Divider, Form, Input, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

export interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  return (
    <Contain>
      <Space style={{ width: '100%', justifyContent: 'center' }}>
        <Logo src="//saber2pr.top/MyWeb/resource/image/todolist-logo.png" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Todolist TreeView
        </Typography.Title>
      </Space>
      <Card
        title="Sign Up"
        style={{
          width: '400px',
          margin: '36px auto',
          boxShadow: '0 10px 20px rgba(0, 0, 0, .2)',
        }}
      >
        <FormContent>
          <Form layout="vertical">
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input placeholder="your nick name" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="your account password" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: 'email' }]}
            >
              <Input placeholder="your email" />
            </Form.Item>
          </Form>
          <Button block type="primary">
            Create An Account
          </Button>
        </FormContent>
      </Card>
      <Bottom>
        <p>Already have an account?</p>
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Sign In
        </Link>
      </Bottom>
    </Contain>
  )
}
