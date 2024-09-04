import React from 'react'
import UserInfo from './userInfo/userInfo'
import "./Lists.css"
import ChatList from './chatList/ChatList'
const Lists = () => {
  return (
    <div className="Lists">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  )
}

export default Lists

