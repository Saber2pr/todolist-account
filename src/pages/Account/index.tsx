import React from 'react'
import { Contain } from './index.style'
import { useAsync } from '@/hooks/useAsync'
import { getUserInfo } from '@/api'

export interface AccountPageProps {}

export const AccountPage: React.FC<AccountPageProps> = ({}) => {
  const { data, loading } = useAsync(async () => {
    const userInfo = await getUserInfo()
    console.log('🚀 ~ const{data,loading}=useAsync ~ userInfo:', userInfo)
    return userInfo
  }, [])

  return <Contain>hello</Contain>
}
