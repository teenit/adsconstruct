import React, { useState } from "react";
import ModalWindow from "../Modals/ModalWindow";
import ProfileNav from "./ProfileNav";
import s from './frontPage.module.css'

const ProfileNavModule = ({close})=>{
    
    return(
        <ModalWindow>
            <div className={s.wrap}>
                <ProfileNav close={close} />
            </div>  
        </ModalWindow>
    )
}

export default ProfileNavModule;