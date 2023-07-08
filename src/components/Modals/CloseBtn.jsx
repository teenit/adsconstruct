import React from "react";
import s from './CloseBtn.module.css'

const CloseBtn = ({close})=>{
    return(
        <div className={s.close} onClick={close}>
            <span className={s.close__one}></span>
            <span className={s.close__two}></span>
        </div>
    )
}

export default CloseBtn;