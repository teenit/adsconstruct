import React, { useState } from 'react'
import s from '../Auth.module.css'
import { Button, TextField } from '@mui/material'



const ForgetPass = ({change,setChange}) => {
    const [code, setCode] = useState('')
    const [codeError, setCodeError] = useState(false)

    return (


        <div className={s.modal__content}>
            <h3>Мы отправили письмом с кодом на вашу почту. Введите этот код ниже.</h3>
            <TextField error={codeError} type='number' required label="Код" variant='outlined' helperText='Код содержит в себе 6 символов' onChange={(e) => {
                setCode(e.target.value)
                setCodeError(e.target.value.length !== 6)
            }} />
            <Button variant='contained' onClick={() => {
                if (codeError == false && code.length > 0) {
                    setChange({...change,forgetPass:false,newPass:true})
                }
            }}>Отправить</Button>
        </div>
    )
}

export default ForgetPass