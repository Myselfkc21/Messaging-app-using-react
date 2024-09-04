import React from 'react'
import './UserInfo.css'
const userInfo = () => {
  return (
    <div className='userinfo'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Henry</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  )
}

export default userInfo
