import React, { useState } from 'react'
import s from './Auth.module.css'
import RegForm from './RegForm';
import LogForm from './LogForm';


const Auth = () => {
  const [form, setForm] = useState({
    reg:false,
    login:true,
  })
  return (
    <div className={s.form__wrap}>
      <div className={s.form__switch}>
      <h2><span className={form.reg==true?s.clicked:null} onClick={(e)=>{
        setForm({...form,login:false,reg:true})
      }}>Регистрация</span> / <span className={form.login==true?s.clicked:null} onClick={()=>{
        setForm({...form,login:true,reg:false})
      }}>Вход</span></h2>
      </div>
      {form.reg==true?<RegForm/>:<LogForm/>}
    </div>
  )
}
export default Auth;
