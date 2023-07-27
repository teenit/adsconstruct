import React, { useState } from 'react'
import s from './Profile.module.css'
import Auth from './Auth/Auth'
import ProfilePage from './ProfilePage/ProfilePage'
import { useSelector } from 'react-redux'


const Profile = () => {
  const {log} = useSelector(state => state.log);

  return (
    <div className={s.wrap}>
        {log==false?<Auth/>:<ProfilePage/>}
    </div>

  )
}

export default Profile