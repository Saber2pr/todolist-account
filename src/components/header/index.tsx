import { Avatar } from 'antd'
import React from 'react'

import { useAppSelector } from '@/store/store'
import { formatUserName } from '@/utils/formatUserName'

import { Contain, LeftContent, RightContent } from './index.style'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const userInfo = useAppSelector((state) => state?.common?.userInfo)

  return (
    <Contain>
      <LeftContent>
        <div>Todolist TreeView</div>
      </LeftContent>
      <RightContent>
        <Avatar size="small">{formatUserName(userInfo?.username)}</Avatar>
      </RightContent>
    </Contain>
  )
}
