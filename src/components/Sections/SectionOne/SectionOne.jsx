import React from "react";
import s from "./style.module.css"
import Block from "../Block";


const SectionOne= ()=>{
    const mas = [...Array(1)]
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
export default SectionOne;