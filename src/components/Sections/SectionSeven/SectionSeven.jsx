import React from "react";
import s from "./style.module.css"
import Block from "../Block";


const SectionSeven= ()=>{
    const mas = [...Array(7)]
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
export default SectionSeven;