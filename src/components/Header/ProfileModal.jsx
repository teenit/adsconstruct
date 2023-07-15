import React from 'react'
import s from './style.module.css'

const ProfileModal = ({setModal}) => {
  return (
    <div className={s.modal__wrap}>
      <div className={s.modal__inner__flexbox}>
        <div className={s.modal__inner} onMouseLeave={()=>{
          setModal(false)
        }}></div>
      </div>
    </div>
  )
}

export default ProfileModal