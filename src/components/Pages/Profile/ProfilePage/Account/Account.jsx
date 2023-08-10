import React, { useState } from 'react'
import s from './Account.module.css'
import { useDispatch, useSelector } from 'react-redux'
import change from '../../../../../img/edit.png'
import { Alert, Button, Snackbar, TextField } from '@mui/material'
import { setProfile } from '../../../../../store/Slices/userSlice'

const Account = ({ colorMas }) => {
  const dispatch = useDispatch()
  const { nickname, email, pass, name, surname, date, bio } = useSelector(state => state.user)

  const [data, setData] = useState({
    nickname: {
      val: nickname,
      hasError: false
    },
    email: {
      val: email,
      hasError: false
    },
    pass: {
      val: pass,
      hasError: false
    },
    date: date,
    name: name,
    surname: surname,
    bio: {
      val: bio,
      hasError: false
    },
  })
  const finishData = {
    nickname: data.nickname.val,
    email: data.email.val,
    pass: data.pass.val,
    name: data.name,
    surname: data.surname,
    date: data.date,
    bio: data.bio.val,
  }
  const [edit, setEdit] = useState(false)
  const [open, setOpen] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    error: false
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
    <div className={s.account__wrap}>
      <div className={s.account__top}>
        <div className={s.edit}>
          <h3 className={s.edit}>Редактировать данные</h3>
          <img src={change} alt="Редактировать" onClick={() => {
            setEdit(true)
          }} />
          {edit == true ? <Button variant='contained' onClick={() => {
            if (data.nickname.hasError == false
              && data.email.hasError == false
              && data.pass.hasError == false
              && data.bio.hasError == false) {
              dispatch(setProfile(finishData))
              console.log(finishData);
              setEdit(false)
              setSnackbar({ ...snackbar, open: true, error: false })

            } else {
              setSnackbar({ ...snackbar, open: true, error: true })

            }
          }}>Сохранить
          </Button> : null}
          <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => {
            setSnackbar({ ...snackbar, open: false })
          }}>
            <Alert severity={snackbar.error == true ? "error" : "success"}>
              {snackbar.error == true ? "Проверьте содержание данных" : "Данные сохранены"}
            </Alert>
          </Snackbar>
        </div>
        {data.nickname.hasError == true ? <p>Недопустимое значение: ник</p> : null}
        {data.email.hasError == true ? <p>Недопустимое значение: почта</p> : null}
        {data.pass.hasError == true ? <p>Недопустимое значение: пароль</p> : null}
        {data.bio.hasError == true ? <p>Недопустимое значение: биография</p> : null}
      </div>

      <div className={s.account__row}>
        <div className={s.account__block__color} style={{ backgroundColor: colorMas[0] }}>
          <div className={`${s.account__block} ${s.right__top}`}>
            <div className={s.text}>
              <input className={s.input}
                style={{ color: data.nickname.hasError === true ? "red" : "white" }}
                disabled={!edit} value={data.nickname.val} onChange={(e) => {
                  setData((arg) => ({
                    ...arg,
                    nickname: {
                      ...arg.nickname,
                      val: e.target.value,
                      hasError: e.target.value.length < 1 || e.target.value.length > 15,
                    },
                  }))

                }} onKeyDown={checkVal} />
              <p>Ваш ник</p>
            </div>
          </div>
        </div>
        <div className={s.account__block__color} style={{ backgroundColor: colorMas[1] }}>
          <div className={`${s.account__block} ${s.left__bottom}`}>
            <div className={s.text}>
              <input className={s.input}
                style={{ color: data.email.hasError === true ? "red" : "white" }}
                disabled={!edit} value={data.email.val} onChange={(e) => {
                  setData((arg) => ({
                    ...arg,
                    email: {
                      ...arg.email,
                      val: e.target.value,
                      hasError: e.target.value.length < 8,
                    },
                  }))

                }} onKeyDown={checkVal} />
              <p>Ваша почта</p>
            </div>
          </div>
        </div>
        <div className={s.account__block__color} style={{ backgroundColor: colorMas[2] }}>
          <div className={`${s.account__block} ${s.left__top}`}>
            <div className={s.text}>
              <input className={s.input}
                type={open == false ? "password" : "text"}
                style={{ color: data.pass.hasError === true ? "red" : "white" }}
                disabled={!edit} value={data.pass.val} onChange={(e) => {
                  setData((arg) => ({
                    ...arg,
                    pass: {
                      ...arg.pass,
                      val: e.target.value,
                      hasError: e.target.value.length < 8 || e.target.value.length > 15,
                    },
                  }))

                }} onKeyDown={checkVal} />
              <p style={{ cursor: "pointer" }} onClick={() => {
                setOpen(!open)
              }}>{open == false ? "Показать пароль" : "Скрыть пароль"}</p>
            </div>
          </div>
        </div>
      </div>


      <div className={s.account__row}>
        <div className={s.account__block__color} style={{ backgroundColor: colorMas[3] }}>
          <div className={`${s.account__block} ${s.right__bottom}`}>
            <div className={s.text}>
              <input className={s.input} disabled={!edit} value={data.name} onChange={(e) => {
                setData({ ...data, name: e.target.value })
              }} />
              <p>Ваше имя</p>
            </div>
          </div>
        </div>
        <div className={s.account__block__color} style={{ backgroundColor: colorMas[4] }}>
          <div className={`${s.account__block} ${s.right__top}`}>
            <div className={s.text}>
              <input className={s.input} disabled={!edit} value={data.surname} onChange={(e) => {
                setData({ ...data, surname: e.target.value })
              }} />
              <p>Ваша фамилия</p>
            </div>
          </div>
        </div>
        <div className={s.account__block__color} style={{ backgroundColor: colorMas[5] }}>
          <div className={`${s.account__block} ${s.left__bottom}`}>
            <div className={s.text}>
              <input type='date' className={s.input} disabled={!edit} value={data.date} onChange={(e) => {
                setData({ ...data, date: e.target.value })
              }} />
              <p>Ваша дата рождения</p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.account__row}>
        <div className={`${s.account__block__color} ${s.fullwidth}`} style={{ backgroundColor: colorMas[6] }}>
          <div className={`${s.account__block} ${s.right__bottom}`}>
            <div className={s.text}>
              <input className={s.input}
                style={{ color: data.bio.hasError === true ? "red" : "white" }}
                disabled={!edit} value={data.bio.val} onChange={(e) => {
                  setData((arg) => ({
                    ...arg,
                    bio: {
                      ...arg.bio,
                      val: e.target.value,
                      hasError: e.target.value.length > 500,
                    },
                  }))

                }} />
              <p>Ваша биография</p>
            </div>
          </div>
        </div>

      </div>
    </div>)
}

export default Account