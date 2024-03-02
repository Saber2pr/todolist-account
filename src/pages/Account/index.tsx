import { Descriptions, Skeleton } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

import { getUserInfo, setCode } from '@/api'
import { useAsync } from '@/hooks/useAsync'
import { commonSlice } from '@/store/common'
import { useAppDispatch } from '@/store/store'
import { formatTimeStr } from '@/utils/date'
import { parseUrlParam } from '@/utils/parseUrlParam'

import { Contain } from './index.style'

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
