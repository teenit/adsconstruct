import React, { useState } from 'react'
import s from './Profile.module.css'
import Auth from './Auth/Auth'
import ProfilePage from './ProfilePage/ProfilePage'


const Profile = () => {
    const [state,setState] = useState({
        auth:false,
        profilePage:true
    })
  return (
    <div className={s.wrap}>
        {state.auth==true?<Auth/>:<ProfilePage/>}
    </div>

  )
}

export default Profile