import React, { useState } from 'react'
import s from '../Auth.module.css'
import ForgetPass from './ForgetPass'
import NewPass from './NewPass'
import cross from './../../../../../img/cross.png'
import PassChanged from './PassChanged'
const AuthModal = ({ setModal }) => {
  const [change, setChange] = useState({
    forgetPass: true,
    newPass: false,
    passChanged: false,
  })
  return (
    <div className={s.modal__wrap}>
      <div className={s.modal__inner}>
        {change.passChanged == false ?
          <div className={s.cross}>
            <img src={cross} alt="" onClick={() => {
              setModal(false)
            }} />
          </div>
          : null}

        {change.forgetPass == true ? <ForgetPass change={change} setChange={setChange} /> : null}
        {change.newPass == true ? <NewPass change={change} setChange={setChange} /> : null}
        {change.passChanged == true ? <PassChanged setModal = {setModal} /> : null}
      </div>
    </div>)
}

export default AuthModal