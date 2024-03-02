import React from 'react'
import { Bottom, Contain, FormContent, Logo } from './index.style'
import { Button, Card, Divider, Form, Input, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <Contain>
      <Space style={{ width: '100%', justifyContent: 'center' }}>
        <Logo src="//saber2pr.top/MyWeb/resource/image/todolist-logo.png" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Todolist TreeView
        </Typography.Title>
      </Space>
      <Card
        title="Sign In"
        style={{
          width: '400px',
          margin: '36px auto',
          boxShadow: '0 10px 20px rgba(0, 0, 0, .2)',
        }}
      >
        <FormContent>
          <Form layout="vertical">
            <Form.Item
              name="identifier"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input placeholder="your nick name" />
            </Form.Item>
            <Form.Item
              name="password"
              labelCol={{ className: 'password-form-item' }}
              label={
                <Space
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <div>Password</div>
                  <Link to="/reset" style={{ textDecoration: 'underline' }}>
                    Forgot password?
                  </Link>
                </Space>
              }
              rules={[{ required: true }]}
            >
              <Input.Password placeholder="your account password" />
            </Form.Item>
          </Form>
          <Button block type="primary">
            Sign In
          </Button>
        </FormContent>
      </Card>
      <Bottom>
        <Link to="/register" style={{ textDecoration: 'underline' }}>
          Create Account
        </Link>
      </Bottom>
    </Contain>
  )
}
