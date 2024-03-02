import React from 'react'
import { Contain } from './index.style'
import { useAsync } from '@/hooks/useAsync'
import { getUserInfo } from '@/api'
import { Descriptions, Skeleton } from 'antd'
import { formatTimeStr } from '@/utils/date'

export interface AccountPageProps {}

export const AccountPage: React.FC<AccountPageProps> = ({}) => {
  const { data, loading } = useAsync(async () => {
    const userInfo = await getUserInfo()
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
      <Descriptions bordered column={1}>
        <Descriptions.Item label="UserId">{data?.id || '-'}</Descriptions.Item>
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
    </Contain>
  )
}
