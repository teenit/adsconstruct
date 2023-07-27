import React from 'react'
import s from './Stats.module.css'

const Stats = ({colorMas}) => {
  return (
    <div className={s.stats__wrap}>
    <div className={s.stats__block} style={{ backgroundColor: colorMas[0] }}>
      <div className={s.text}>
        <h1>200</h1>
        <p> монет было потрачено вами</p>
      </div>
    </div>
    <div className={s.stats__block} style={{ backgroundColor: colorMas[1] }}>
      <div className={s.text}>
        <h1>5</h1>
        <p>реклам было размещено</p>
      </div>
    </div>
    <div className={s.stats__block} style={{ backgroundColor: colorMas[2] }}>
      <div className={s.text}>
        <h1>19</h1>
        <p>просмотров вашей рекламы</p>
      </div>
    </div>
  </div>  )
}

export default Stats