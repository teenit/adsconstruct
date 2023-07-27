import React, { useState } from 'react'
import s from './Lang.module.css'
import globe from '../../img/globe.png'


const Lang = () => {
    const [lang, setLang] = useState(false)

    return (
        <div className={s.lang}>
            <div style={{ cursor: "pointer" }} onClick={() => {
                setLang(!lang)
            }}>
                <img src={globe} alt="Язык" />
            </div>
            {lang == true ? <div className={s.lang__menu}>
                <p>Русский</p>
                <p>Украинский</p>
                <p>Английский</p>
            </div> : null}
        </div>
    )
}

export default Lang