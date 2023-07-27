import React, { useState } from 'react'
import s from './Settings.module.css'
import { Button } from '@mui/material'
import shop from '../../../../../img/corz.png'
import { useDispatch, useSelector } from 'react-redux'
import { setLog } from '../../../../../store/Slices/logSlice'
import { setColor } from '../../../../../store/Slices/userSlice'
import edit from '../../../../../img/edit.png'
import remove from '../../../../../img/delete.png'
import add from '../../../../../img/add.png'

const Settings = ({colorMas}) => {
  const dispatch = useDispatch()
  const { tvmpCoin } = useSelector(state => state.tvmpCoin);
  const { color, colorHover } = useSelector(state => state.user);

  return (
    <div className={s.settings__wrap}>
      <div className={s.settings__column}>
        <div className={s.settings__option} style={{backgroundColor:colorMas[0]}}>
          <h3>Баланс</h3>
          <p>Ваш баланс: {tvmpCoin}</p>
          <Button className={s.buy__button} variant="contained">
            <p>купить</p>
            <div className={s.img__wrap}>
              <a href="#"><img src={shop} alt="Логотип" /></a>
            </div>
          </Button>
          <p style={{ cursor: "pointer" }}>История операций</p>
        </div>

        <div className={s.settings__option} style={{backgroundColor:colorMas[1]}}>
          <h3>Интерфейс</h3>
          <div className={s.color__wrap}>
            <p>Дополнительный цвет:</p>
            <input type="color" className={s.color} defaultValue={color} onChange={(e) => {
              dispatch(setColor(e.target.value))
              document.documentElement.style.setProperty('--main-color', color)
              document.documentElement.style.setProperty('--main-color-hover', colorHover)
             }} />
          </div>
        </div>

      </div>



      <div className={s.settings__column}>
        <div className={s.settings__option} style={{backgroundColor:colorMas[2]}}>
          <h3>Данные для оплаты</h3>
          <div className={s.payment__wrap}>
            <div className={s.payment__option}>
              <p style={{ fontWeight: "bold" }}>PayPal</p>
              <p>test</p>
              <p>test</p>
              <div className={s.payment__panel}>
              <div className={s.img__wrap}>
                <img src={edit} alt="Редактировать" />
              </div>
              <div className={s.img__wrap}>
                <img src={remove} alt="Удалить" />
              </div>
              </div>
            </div>

            <div className={s.payment__option}>
              <p style={{ fontWeight: "bold" }}>Банковская карта</p>
              <p>test</p>
              <p>test</p>
              <div className={s.payment__panel}>
              <div className={s.img__wrap}>
                <img src={edit} alt="Редактировать" />
              </div>
              <div className={s.img__wrap}>
                <img src={remove} alt="Удалить" />
              </div>
              </div>
            </div>

            <div className={s.add__payment}>
              <p style={{ fontWeight: "bold" }}>Добавить метод оплаты</p>
                <img src={add} alt="Добавить метод оплаты" />
            </div>

          </div>
        </div>
        <div className={s.settings__option} style={{backgroundColor:colorMas[3]}}>
          <h3>Выход с аккаунта</h3>
          <Button variant='contained' onClick={() => {
            dispatch(setLog(false))
          }} className={s.red__button}>выйти</Button>
        </div>



      </div>
      <div className={s.settings__option} style={{backgroundColor:colorMas[4]}}>
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
    </div>)
}

export default Settings