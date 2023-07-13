import { Button } from '@mui/material'
import s from '../Auth.module.css'
import React from 'react'


const PassChanged = ({setModal}) => {
  return (
    <div className={s.modal__content}>
        <h3>Пароль успешно изменен. Теперь вы можете войти в аккаунт.</h3>
        <Button variant='contained' onClick={()=>{
          setModal(false)
        }}>Продолжить</Button>
    </div>
  )
}

export default PassChanged