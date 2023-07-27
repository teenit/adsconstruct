import React from 'react'
import s from './Slots.module.css'
import add from '../../../../../img/add.png'
import Card from './Card'

const Slots = ({colorMas}) => {
  const slotsData = [
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
    {
        imgUrl: "url",
        type: "1/7",
        category: "test",
        isActive: "12 minutes"
    },
]
  return (
    
    <div className={s.slots__wrap}>
      <h3>Ваши слоты</h3>
      <div className={s.cards__wrap}>
                {slotsData.map((item,index)=><Card colorMas = {colorMas} item={item} index={index} key={index}/>)}
                <div className={s.add__wrap}>
                <img src={add} alt="Добавить слот" />
                </div>
        </div>
    </div>
  )
}

export default Slots