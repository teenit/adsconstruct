import React from 'react'
import s from './ProfilePage.module.css'
import { Button } from '@mui/material'
import shop from '../../../../img/corz.png'

const Settings = () => {
  return (
    <div className={s.settings__wrap}>
    <div className={s.settings__option}>
      <h3>Баланс</h3>
      <p>Ваш баланс: 200</p>
      <Button className={s.buy__button} variant="contained">
        <p>купить</p>
        <div className={s.img__wrap}>
          <a href="#"><img src={shop} alt="Логотип" /></a>
        </div>
      </Button>
      <p style={{ cursor: "pointer" }}>История операций</p>
    </div>

    <div className={s.settings__option}>
      <h3>Данные для оплаты</h3>
      <div className={s.payment__wrap}>
        <div className={s.payment__option}>
          <p style={{ fontWeight: "bold" }}>PayPal</p>
          <p>test</p>
          <p>test</p>
          <div className={s.settings__edit}></div>
        </div>

        <div className={s.payment__option}>
          <p style={{ fontWeight: "bold" }}>Банковская карта</p>
          <p>test</p>
          <p>test</p>
          <div className={s.settings__edit}></div>
        </div>
        <div className={s.add__payment}>
          <p style={{ fontWeight: "bold" }}>Добавить метод оплаты</p>
          <div className={s.add__payment}></div>
        </div>

      </div>
    </div>

    <div className={s.settings__option}>
      <h3>Промокоды</h3>
      <div className={s.promos__wrap}>
        <div className={s.promo}>
          <div className={s.promo__top}>
            <h3>Скидка 50%</h3>
            <p className={s.promo__date}>До 07.08.2023</p>
          </div>
        </div>
        <div className={s.promo}>
          <div className={s.promo__top}>
            <h3>Скидка 50% test test test</h3>
            <p className={s.promo__date}>До 07.08.2023</p>
          </div>
        </div>
        <Button className={s.buy__button} variant="contained">добавить промокод</Button>
      </div>
    </div>
  </div>  )
}

export default Settings