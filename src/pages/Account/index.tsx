import { Card, Descriptions, Divider, Skeleton, Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

import { getUserInfo, setCode } from '@/api'
import { useAsync } from '@/hooks/useAsync'
import { commonSlice } from '@/store/common'
import { useAppDispatch } from '@/store/store'
import { formatTimeStr } from '@/utils/date'
import { parseUrlParam } from '@/utils/parseUrlParam'

import { Contain } from './index.style'
import { Logo } from '../confirmReset/index.style'

export interface AccountPageProps {}

export const AccountPage: React.FC<AccountPageProps> = ({}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { data, loading } = useAsync(async () => {
    const query = parseUrlParam(location.search)
    if (query?.code) {
      setCode(query?.code)
      navigate('/confirmReset')
      return
    }

    const userInfo = await getUserInfo()
    dispatch(commonSlice.actions.setUserInfo(userInfo))
    return userInfo
  }, [])

  if (loading) {
    return (
      <Contain>
        <Skeleton active avatar paragraph />
      </Contain>
    )
  }

  return (
    <Contain>
      <Space style={{ width: '100%' }}>
        <Logo src="//saber2pr.top/MyWeb/resource/image/todolist-logo.png" />
        <Typography.Title level={3} style={{ marginBottom: 0 }}>
          Todolist TreeView
        </Typography.Title>
      </Space>
      <Divider />
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
        </Descriptions>
      </Card>
    </Contain>
  )
}