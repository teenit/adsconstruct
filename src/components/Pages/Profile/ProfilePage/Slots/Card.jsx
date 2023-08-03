import React from 'react'
import s from './Slots.module.css'
import { Button } from '@mui/material'


const Card = ({ item, index, colorMas }) => {
    return (
        <div className={s.card__wrap} style={{backgroundColor: colorMas[index]}}>
            <div className={s.card}>
                <div className={s.slots__photo}></div>
                <p>Слот №{index + 1}</p>
                <p>Тип: {item.type}</p>
                <p>Категория: {item.category}</p>
                <p>Активен: {item.isActive}</p>
                <Button variant='contained'>Продлить время</Button>
                <Button className={s.red__button} variant='contained'>Отключить слот</Button>
                <Button className={s.red__button} variant='contained'>Удалить слот</Button>
            </div>
        </div>
    )
}

export default Card