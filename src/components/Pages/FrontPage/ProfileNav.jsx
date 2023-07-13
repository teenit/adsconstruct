import React, { useState } from "react";
import CloseBtn from "../Modals/CloseBtn";
import s from './frontPage.module.css';

const ProfileNav= ({close})=>{
    
    return(
        <div className={s.inner__form}>
            <CloseBtn close={close}/>
        </div>
    )
}

export default ProfileNav;