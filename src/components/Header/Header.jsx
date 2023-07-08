import React from "react";
import s from "./style.module.css"
import { InputBase, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
const Header = ()=>{
    return(
        <div className={s.header}>
            <div className="header__logo__menu">
            <img src="" alt="logo" />
            </div>
            <div className={s.header__wrap}>
                <div className={s.input}>
                    <Search className={s.input__icon}/>
                <InputBase  className={s.header__input} placeholder="Введіть ключове слово"/>
                </div>
            </div>
            <div className={s.header__menu}>
                <div className={s.header__profile}>
                    <img src="" alt="Profile__img" />
                </div>
                <div className={s.header__buy}>
                    <img src="" alt="Korzina__img" />
                </div>
            </div>
        
        
        </div>
    )
}
export default Header;