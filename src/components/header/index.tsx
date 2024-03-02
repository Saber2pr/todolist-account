import React from 'react'
import { Contain, LeftContent, RightContent } from './index.style'
import { Avatar } from 'antd'
import { formatUserName } from '@/utils/formatUserName'

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const userName = 'saber2pr'

  return (
    <Contain>
      <LeftContent>
        <div>Todolist TreeView</div>
      </LeftContent>
      <RightContent>
        <Avatar size="small">{formatUserName(userName)}</Avatar>
      </RightContent>
    </Contain>
  )
}
