import React from 'react'
import { Bottom, Contain, FormContent, Logo } from './index.style'
import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  Space,
  Typography,
  message,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useAsync } from '@/hooks/useAsync'
import { forgotPwd } from '@/api'

export interface ResetPageProps {}

type FormValues = {
  email: string
}

export const ResetPage: React.FC<ResetPageProps> = ({}) => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const { loading, run: runReset } = useAsync(
    async (values: FormValues) => {
      const res = await forgotPwd(values)
      message.info('An email with a reset code has been sent to you')
      return res
    },
    [],
    {
      manual: true,
      onSuccess() {
        navigate('/confirmReset')
      },
    },
  )

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
          <Form form={form} onFinish={runReset} layout="vertical">
            <Form.Item
              name="email"
              label="Email address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Email address you use to sign up." />
            </Form.Item>
          </Form>
          <Button
            loading={loading}
            block
            type="primary"
            onClick={() => form.submit()}
          >
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
