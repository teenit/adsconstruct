import React, { useState } from 'react'
import s from './Auth.module.css'
import { Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, TextField } from '@mui/material';

const RegForm = () => {
    const [regData, setRegData] = useState({
        nickname: {
            val: '',
            hasError: false
        },
        email: {
            val: '',
            hasError: false
        },
        password: {
            val: '',
            hasError: false
        },
        date: '',
        city: '',
        bio: {
            val: '',
            hasError: false
        },
    })
    const finishRegData = {
        nickname: regData.nickname.val,
        email: regData.email.val,
        password: regData.password.val,
        date: regData.date,
        city: regData.city,
        bio: regData.bio.val,
    }
    const forbiddenSymbols = [' ', ',', ':', ';', '>', '<', '{', '}', '(', ')', '`', '~', '|', '+', '=', '^', '*']

    const checkVal = (e) => {
        forbiddenSymbols.map((item) => {
            if (e.key === item) {
                e.preventDefault()
            }
        })

    }
    const [check, setCheck] = useState({
        politics: false,
        conditions: false
    })
    return (
        <div className={s.form__inner}>
            <div className={s.options}>
                <h3>Аккаунт</h3>
                <div className={s.options__row}>
                    <div className={s.option}>
                        <label htmlFor='nickname'><p>Ник</p></label>
                        <TextField error={regData.nickname.hasError} required id='nickname' label="Ник" variant="outlined" helperText={regData.nickname.hasError == true ? "Этот ник недоступен" : "Введите хотя бы 1 символ"} onChange={(e) => {
                            setRegData((arg) => ({
                                ...arg,
                                nickname: {
                                    ...arg.nickname,
                                    val: e.target.value,
                                    hasError: e.target.value.length < 1,
                                },
                            }))

                        }} onKeyDown={checkVal} />
                    </div>
                    <div className={s.option}>
                        <label htmlFor='email'><p>Почта</p></label>
                        <TextField error={regData.email.hasError} required id="email" label="Почта" variant="outlined" helperText={regData.email.hasError == true ? "Введите хотя бы 8 символов" : "Пример:example@gmail.com"} onChange={(e) => {
                            setRegData((arg) => ({
                                ...arg,
                                email: {
                                    ...arg.email,
                                    val: e.target.value,
                                    hasError: e.target.value.length < 8,
                                },
                            }))
                        }} onKeyDown={checkVal} />
                    </div>
                </div>

                <div className={s.option}>
                    <label htmlFor='password'><p>Пароль</p></label>
                    <TextField error={regData.password.hasError} type='password' required id='password' label="Пароль" variant="outlined" helperText={regData.password.hasError == true ? "Этот пароль не подходит" : "Пароль должен быть от 8 символов"} onChange={(e) => {
                        setRegData((arg) => ({
                            ...arg,
                            password: {
                                ...arg.password,
                                val: e.target.value,
                                hasError: e.target.value.length < 8,
                            },
                        }))
                    }} onKeyDown={checkVal} />
                </div>

            </div>
            <div className={s.options}>
                <h3>Личная информация</h3>
                <div className={s.options__row}>
                    <div className={s.option}>
                        <label htmlFor='date'><p>Дата рождения</p></label>
                        <TextField type='date' id='date' variant="outlined" onChange={(e) => {
                            setRegData({ ...regData, date: e.target.value })
                        }} />
                    </div>
                    <div className={s.option}>
                        <label htmlFor='city'><p>Город</p></label>
                        <TextField type='text' id='city' variant="outlined" onChange={(e) => {
                            setRegData({ ...regData, city: e.target.value })
                        }} />
                    </div>
                </div>
                <div className={s.option__row}>
                    <div className={s.option}>
                        <label htmlFor='bio'><p>О себе</p></label>
                        <TextField multiline error={regData.bio.hasError} type='text' id='bio' variant="outlined" helperText={regData.bio.hasError == true ? "Ваше описание должно иметь не больше 500 символов" : "Ваше описание выглядит чудесно!(надеюсь)"} fullWidth onChange={(e) => {
                            setRegData((arg) => ({
                                ...arg,
                                bio: {
                                    ...arg.bio,
                                    val: e.target.value,
                                    hasError: e.target.value.length > 500,
                                },
                            }))
                        }} />
                    </div>
                </div>
            </div>
            <FormGroup>
                <div className={s.checkbox}>
                    <Checkbox checked={!check.politics} id='politics' onChange={() => {
                        setCheck({ ...check, politics:!check.politics })
                    }} />
                    <label htmlFor="politics"><p>Я согласен с <a href="#">политикой конфиденциальности</a> <span className={check.politics==true?s.error:null}>*</span></p></label>
                </div>
                <div className={s.checkbox}>
                    <Checkbox checked={!check.conditions} id='conditions' onClick={() => {
                        setCheck({ ...check, conditions: !check.conditions })
                    }} />
                    <label htmlFor="conditions"><p>Я согласен с <a href="#">условиями использования</a> <span className={check.conditions==true?s.error:null}>*</span></p></label>
                </div>
            </FormGroup>
            <Button variant="contained" onClick={() => {
                if (regData.nickname.hasError == false && regData.email.hasError == false && regData.password.hasError == false && regData.bio.hasError == false && regData.nickname.val !== '' && regData.email.val !== '' && regData.password.val !== '' && check.conditions == false && check.politics == false) {
                    alert("Регистрация прошла успешно!")
                    console.log(finishRegData)

                }
            }}>Зарегистрироваться</Button>

        </div>
    )
}

export default RegForm