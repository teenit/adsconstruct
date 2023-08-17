import React, { useState } from 'react'
import s from './Lang.module.css'
import globe from '../../img/globe.png'
import eng from '../../img/eng_lang.svg'
import ua from '../../img/ua_lang.svg'

const Lang = () => {
    const [lang, setLang] = useState(false)

    return (
        <div className={s.lang}>
            <div className={s.lang__iner}>
                <img src={globe} alt="" />
                <div className={s.vibor}>
                    <div className={s.eng}>
                        <img src={eng} alt="" />
                        <p>English</p>
                    </div>
                    <div className={s.ua}>
                        <img src={ua} alt="" />
                        <p>Українська</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lang