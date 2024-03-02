import React from 'react'
import { Contain } from './index.style'
import { useAsync } from '@/hooks/useAsync'
import { getUserInfo } from '@/api'
import { Descriptions, Skeleton } from 'antd'
import { formatTimeStr } from '@/utils/date'
import { useDispatch } from 'react-redux'
import { commonSlice } from '@/store/common'
import { useAppDispatch } from '@/store/store'

export interface AccountPageProps {}

export const AccountPage: React.FC<AccountPageProps> = ({}) => {
  const dispatch = useAppDispatch()

  const { data, loading } = useAsync(async () => {
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
