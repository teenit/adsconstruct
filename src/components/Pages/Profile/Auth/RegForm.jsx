import React, { useState } from 'react'
import s from './Auth.module.css'
import { Alert, Button, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, Snackbar, TextField } from '@mui/material';
import { useDispatch} from 'react-redux';
import { setLog } from '../../../../store/Slices/logSlice';
import { setProfile } from '../../../../store/Slices/userSlice';

const RegForm = () => {
    const dispatch = useDispatch()
    const [regData, setRegData] = useState({
        nickname: {
            val: '',
            hasError: false
        },
        email: {
            val: '',
            hasError: false
        },
        pass: {
            val: '',
            hasError: false
        },
        date: '',
        name: '',
        surname: '',
        bio: {
            val: '',
            hasError: false
        },
    })
    const finishRegData = {
        nickname: regData.nickname.val,
        email: regData.email.val,
        pass: regData.pass.val,
        name: regData.name,
        surname: regData.surname,
        date: regData.date,
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
    const [snackbar, setSnackbar] = useState({
        open: false,
        error: false
      })
    return (
        <div className={s.form__inner}>
            <div className={s.options}>
                <h3>Аккаунт</h3>
                <div className={s.options__row}>
                    <div className={s.option}>
                        <label htmlFor='nickname'><p>Ник</p></label>
                        <TextField error={regData.nickname.hasError} required id='nickname' label="Ник" variant="outlined" helperText={regData.nickname.hasError == true ? "Этот ник недоступен" : "Введите от 1 до 15 символов"} onChange={(e) => {
                            setRegData((arg) => ({
                                ...arg,
                                nickname: {
                                    ...arg.nickname,
                                    val: e.target.value,
                                    hasError: e.target.value.length < 1 || e.target.value.length>15,
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
                    <TextField error={regData.pass.hasError} type='password' required id='password' label="Пароль" variant="outlined" helperText={regData.pass.hasError == true ? "Этот пароль не подходит" : "Пароль должен быть от 8 до 15 символов"} onChange={(e) => {
                        setRegData((arg) => ({
                            ...arg,
                            pass: {
                                ...arg.pass,
                                val: e.target.value,
                                hasError: e.target.value.length < 8 || e.target.value.length>15,
                            },
                        }))
                    }} onKeyDown={checkVal} />
                </div>

            </div>
            <div className={s.options}>
                <h3>Личная информация</h3>
                <div className={s.options__row}>
                    <div className={s.option}>
                        <label htmlFor='name'><p>Имя</p></label>
                        <TextField type='text' id='name' variant="outlined" onChange={(e) => {
                            setRegData({ ...regData, name: e.target.value })
                        }} />
                    </div>
                    <div className={s.option}>
                        <label htmlFor='surname'><p>Фамилия</p></label>
                        <TextField type='text' id='surname' variant="outlined" onChange={(e) => {
                            setRegData({ ...regData, surname: e.target.value })
                        }} />
                    </div>
                </div>
                <div className={s.options__row}>
                    <div className={s.option}>
                        <label htmlFor='date'><p>Дата рождения</p></label>
                        <TextField type='date' id='date' variant="outlined" onChange={(e) => {
                            setRegData({ ...regData, date: e.target.value })
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
                if (regData.nickname.hasError == false && regData.email.hasError == false && regData.pass.hasError == false && regData.bio.hasError == false && regData.nickname.val !== '' && regData.email.val !== '' && regData.pass.val !== '' && check.conditions == false && check.politics == false) {
                    console.log(finishRegData);
                    dispatch(setLog(true))
                    dispatch(setProfile(finishRegData))

                }
            }}>Зарегистрироваться</Button>
        </div>
    )
}

export default RegForm