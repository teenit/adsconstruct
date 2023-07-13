import React from "react";
import s from "./instructions.module.css";
import logo from "./icons/icons8-камера-48.png"

const Instructions = ()=>{

    return(
        <div className={s.wrap}>
            <div className={s.wrap__80}>
                <div className={s.header}>
                    <img src={logo} alt="" />
                    <h3>AdsConstruct</h3>
                </div>
                <div className={s.wrap__mid}>
                    <h1>Инструкция</h1>
                </div>
                <div className={s.wrap__info}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reprehenderit, repellendus, natus ullam, maxime nisi eos perferendis consequatur quos aut aspernatur sunt illo numquam! Quae dolore laborum facilis eligendi! Ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reprehenderit, repellendus, natus ullam, maxime nisi eos perferendis consequatur quos aut aspernatur sunt illo numquam! Quae dolore laborum facilis eligendi! Ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi reprehenderit, repellendus, natus ullam, maxime nisi eos perferendis consequatur quos aut aspernatur sunt illo numquam! Quae dolore laborum facilis eligendi! Ea.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia amet voluptates asperiores odio provident illo quis unde, ut voluptas fugit dolorum libero quia corrupti perferendis id rem. Reprehenderit, hic!</p>
                </div>
            </div>
        </div>
    )
}
export default Instructions;