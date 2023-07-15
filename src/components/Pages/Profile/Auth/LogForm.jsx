import React, { useState } from 'react'
import s from './Auth.module.css'
import { Button, TextField } from '@mui/material'
import AuthModal from './AuthModals/AuthModal'

const LogForm = () => {
    const [logData, setLogData] = useState({
        nickname:'',
        email:'',
        password:''
    })
const [change, setChange] = useState({
    nickname: true,
    email: false
})
const [modal,setModal] = useState(false)
return (
    <div className={s.form__inner}>
        <div className={s.options}>
            <div className={s.options__row}>
                <div className={s.option}>
                    <label htmlFor={change.nickname == true ? "nickname" : "email"}><p><span className={change.nickname == true ? `${s.clicked} ${s.bold}`: null} onClick={() => {
                        setChange({ ...change, nickname: true, email: false })
                    }}>Ник</span> / <span className={change.email == true ? `${s.clicked} ${s.bold}` : null} onClick={() => {
                        setChange({ ...change, nickname: false, email: true })

                    }}>Почта</span></p></label>
                    {change.nickname == true ?
                        <TextField required id='nickname' label="Ник" variant="outlined" onChange={(e) => {
                            setLogData({ ...logData, nickname: e.target.value })
                        }} />
                        :
                        <TextField required id='email' label="Почта" variant="outlined" onChange={(e) => {
                            setLogData({ ...logData, email: e.target.value })
                        }} />
                    }

                </div>
                <div className={s.option}>
                    <label htmlFor='password'><p>Пароль</p></label>
                    <TextField required id="password" label="Пароль" variant="outlined" onChange={(e) => {
                        setLogData({ ...logData, password: e.target.value })
                    }} />
                </div>
            </div>
        </div>
        <Button variant="contained" onClick={() => {
            console.log(logData)
        }}>Войти</Button>
        <p onClick={()=>{
            setModal(true)
        }}>Забыли пароль?</p>
        {modal==true?<AuthModal setModal={setModal}/>:null}
    </div>
)
}

export default LogForm