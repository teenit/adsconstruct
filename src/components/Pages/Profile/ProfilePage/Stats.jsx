import React from 'react'
import s from './ProfilePage.module.css'

const Stats = () => {
  return (
    <div className={s.stats__wrap}>
    <div className={s.stats__block} style={{ backgroundColor: "rgba(68, 150, 68, 0.777)" }}>
      <div className={s.text}>
        <h1>200</h1>
        <p> монет было потрачено вами</p>
      </div>
    </div>
    <div className={s.stats__block} style={{ backgroundColor: "rgba(68, 113, 150, 0.777)" }}>
      <div className={s.text}>
        <h1>5</h1>
        <p>реклам было размещено</p>
      </div>
    </div>
    <div className={s.stats__block} style={{ backgroundColor: "rgba(140, 68, 150, 0.777)" }}>
      <div className={s.text}>
        <h1>19</h1>
        <p>просмотров вашей рекламы</p>
      </div>
    </div>
  </div>  )
}

export default Stats