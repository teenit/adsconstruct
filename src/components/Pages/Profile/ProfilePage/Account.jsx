import React from 'react'
import s from './ProfilePage.module.css'

const Account = () => {
  return (
    <div className={s.account__wrap}>
                  <h3 className={s.edit}>Редактировать данные</h3>
    <div className={s.account__row}>
      <div className={s.account__block__color} style={{ backgroundColor: "rgba(68, 150, 68, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h1>profilename</h1>
            <p>Ваш ник</p>
          </div>
        </div>
      </div>
      <div className={s.account__block__color} style={{ backgroundColor: "rgba(68, 113, 150, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h1>mail@gmail.com</h1>
            <p>Ваша почта</p>
          </div>
        </div>
      </div>
      <div className={s.account__block__color} style={{ backgroundColor: "rgba(140, 68, 150, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h1>password</h1>
            <p>Ваш пароль</p>
          </div>
        </div>
      </div>
    </div>


    <div className={s.account__row}>
      <div className={s.account__block__color} style={{ backgroundColor: "rgba(150, 68, 95, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h1>name</h1>
            <p>Ваше имя</p>
          </div>
        </div>
      </div>
      <div className={s.account__block__color} style={{ backgroundColor: "rgba(149, 150, 68, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h1>surname</h1>
            <p>Ваша фамилия</p>
          </div>
        </div>
      </div>
      <div className={s.account__block__color} style={{ backgroundColor: "rgba(150, 108, 68, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h1>city</h1>
            <p>Ваш город</p>
          </div>
        </div>
      </div>
    </div>

    <div className={s.account__row}>
      <div className={`${s.account__block__color} ${s.fullwidth}`} style={{ backgroundColor: "rgba(80, 68, 150, 0.777)" }}>
        <div className={s.account__block}>
          <div className={s.text}>
            <h3>bio</h3>
            <p>Ваша биография</p>
          </div>
        </div>
      </div>

    </div>
  </div>  )
}

export default Account