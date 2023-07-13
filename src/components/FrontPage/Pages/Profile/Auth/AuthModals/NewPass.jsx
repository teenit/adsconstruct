import React, { useState } from 'react'
import s from '../Auth.module.css'
import { TextField, Button } from '@mui/material'

const NewPass = ({change, setChange}) => {
    const [pass, setPass] = useState({
        newPass: {
            val: '',
            hasError: false
        },
        confirmPass: {
            val: '',
            hasError: false
        },
    })
    const forbiddenSymbols = [' ', ',', ':', ';', '>', '<', '{', '}', '(', ')', '`', '~', '|', '+', '=', '^', '*']

    const checkVal = (e) => {
        forbiddenSymbols.map((item) => {
            if (e.key === item) {
                e.preventDefault()
            }
        })

    }
    return (
        <div className={s.modal__content}>
            <h3>Придумайте новый пароль. Пароль должен быть от 8 символов.</h3>
            <TextField error={pass.newPass.hasError} type='password' required label="Пароль" variant="outlined" helperText={pass.newPass.hasError == true ? "Этот пароль не подходит" : "Этот пароль подходит"} onChange={(e) => {
                setPass((arg) => ({
                    ...arg,
                    newPass: {
                        ...arg.newPass,
                        val: e.target.value,
                        hasError: e.target.value.length < 8,
                    },
                }))
            }} onKeyDown={checkVal} />
            <TextField error={pass.confirmPass.hasError} type='password' required label="Подтвердите пароль" variant="outlined" helperText={pass.confirmPass.hasError == true ? "Этот пароль не подходит" : "Этот пароль подходит"} onChange={(e) => {
                setPass((arg) => ({
                    ...arg,
                    confirmPass: {
                        ...arg.confirmPass,
                        val: e.target.value,
                        hasError: e.target.value.length < 8,
                    },
                }))
            }} onKeyDown={checkVal} />
            <p>{pass.newPass.val == pass.confirmPass.val ? "Эти пароли совпадают" : "Эти пароли не совпадают"}</p>
            <Button variant='contained' onClick={() => {
                if (pass.newPass.val == pass.confirmPass.val && pass.newPass.hasError==false && pass.confirmPass.hasError==false && pass.newPass.val!== '') {
                    setChange({...change,forgetPass:false,newPass:false,passChanged:true})
                }
            }}>Отправить</Button>
        </div>)
}

export default NewPass