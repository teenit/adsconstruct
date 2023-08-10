import React, { useState } from 'react'
import s from './Lang.module.css'
import globe from '../../img/globe.png'


const Lang = () => {
    const [lang, setLang] = useState(false)

    return (
        <div className={s.lang}>
            <div className={s.lang__iner}>
                <img src={globe} alt="" />
                <div className={s.vibor}></div>
            </div>
        </div>
    )
}

export default Lang