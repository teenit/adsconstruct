import React, { useState } from "react";
import s from "./style.module.css"
import { Button, InputBase, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import shop from '../../img/corz.png'
import globe from '../../img/globe.png'
import ProfileModal from "./ProfileModal";
const Header = () => {
    const [inputData, setInputData] = useState('')
    const [active, setActive] = useState(false)
    const [profileModal, setProfileModal] = useState(false)
    const [lang, setLang] = useState(false)
    return (
        <div className={s.header}>
            <div className={s.logo__wrap}>
                <div className={s.logo}></div>
            </div>
            <div className={s.header__inner}>
                <div className={s.inner__block}>
                    <p>Баланс: <span><b>200</b></span></p>
                    <Button className={s.buy__button} variant="contained">
                        <p>купить</p>
                        <div className={s.img__wrap}>
                            <a href="#"><img src={shop} alt="Логотип" /></a>
                        </div>
                    </Button>
                    <div className={s.lang}>
                        <div style={{cursor:"pointer"}} onClick={() => {
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

                </div>

                <div className={s.inner__block}>
                    <div className={s.header__menu}>
                        <div className={s.input} onMouseEnter={(e) => {
                            setActive(true)
                        }} onMouseLeave={(e) => {
                            setActive(false)
                        }}  >
                            {active == true ? <InputBase value={inputData} className={s.header__input} placeholder="Введите ключевое слово" onChange={(e) => {
                                setInputData(e.target.value)


                            }} />
                                : null}
                            <div onClick={() => {
                                console.log(inputData)
                            }}>
                                <Search className={s.input__icon} />
                            </div>
                        </div>
                        <div className={s.line}></div>
                        <p onMouseEnter={() => {
                            setProfileModal(true)
                        }}>Профиль</p>
                        {modal == true ? <ProfileModal setModal={setProfileModal} /> : null}
                        <div className={s.line}></div>
                        <p>Инструкция</p>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Header;