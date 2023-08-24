import React, { useState } from "react";
import s from "./style.module.css"
import Block from "../Block";


const SectionEight = () => {

    const mas = [...Array(8)]
    return (
        <div className={s.module}>
            <div className={s.container}>
                {mas.map((index)=>{
                    return(
                        <Block key={index} mas={mas}/>
                    )
                })}
            </div>
        </div>
    )
}
export default SectionEight;