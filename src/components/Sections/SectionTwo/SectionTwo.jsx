import React from "react";
import s from "./style.module.css"
import Block from "../Block";


const SectionTwo= ({numberBlocks,typeSection})=>{
    const mas = [...Array(numberBlocks)]
    return (
        <div className={s.module}>
            <div className= {`${s.container} ${s[typeSection]}`} >
                {mas.map((index)=>{
                    return(
                        <Block key={index}/>
                    )
                })}
            </div>
        </div>
    )
}
export default SectionTwo;