import React, { useState } from "react";
import s from "./style.module.css"
import { Button, InputBase, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import shop from '../../img/corz.png'
import ProfileModal from "./ProfileModal";
import Lang from "./Lang";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
    const { tvmpCoin } = useSelector(state => state.tvmpCoin)
    const [inputData, setInputData] = useState('')
    const [active, setActive] = useState(false)
    const [profileModal, setProfileModal] = useState(false)
    return (
        <div className={s.header}>
            <div className={s.logo__wrap}>
                <Link to='/'><div className={s.logo}></div></Link>
            </div>
            <div className={s.header__inner}>
                <div className={s.inner__block}>
                    <p>Баланс: <span><b>{tvmpCoin}</b></span></p>
                    <Button className={s.buy__button} variant="contained">
                        <p>купить</p>
                        <div className={s.img__wrap}>
                            <a href="#"><img src={shop} alt="Логотип" /></a>
                        </div>
                    </Button>
                    <Lang />


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
                            <div>
                                <Search className={s.input__icon} />
                            </div>
                        </div>
                        <div className={s.line}></div>
                        <p onMouseEnter={() => {
                            setProfileModal(true)
                        }}>Профиль</p>
                        {profileModal == true ? <ProfileModal setModal={setProfileModal} /> : null}
                        <div className={s.line}></div>
                        <Link to='/instruction'><p>Инструкция</p></Link>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Header;