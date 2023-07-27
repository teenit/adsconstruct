import React from "react";
import s from './frontPage.module.css'
import PortalModalRoot from "../../Portals/PortalModalRoot";
import cross from "../../../img/cross.png"
import SectionThree from "../../Sections/SectionThree/SectionThree";

const SectionModal = ({setSectionModal}) => {
    return (
        <PortalModalRoot>
            <div className={s.t0}>
                
                <div className={s.form}>
                <div className={s.close} onClick={()=>{setSectionModal(false)}}>
                    <img src={cross} alt="" />
                </div>
                    <div className={s.top}>Выберите тип слота</div>
                    <div className={s.mid}>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.full__section}`}>
                        </div>
                        <p>type:full price:200</p>    
                        </div>
                        
                        <div className={s.full}>
                        <div className={`${s.section} ${s.half__section}`}>
                        </div>
                        <p>type:full price:200</p>
                        </div>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.third__section}`}>
                           
                        </div>
                        <p>type:full price:200</p>
                        </div>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.fourth__section}`}>
                        </div>
                        <p>type:full price:200</p>
                        </div>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.fifth__section}`}>
                        </div>
                        <p>type:full price:200</p>
                        </div>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.sixth__section}`}>
                        </div>
                        <p>type:full price:200</p>
                        </div>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.seventh__section}`}>
                        </div>
                        <p>type:full price:200</p>
                        </div>
                        <div className={s.full}>
                        <div className={`${s.section} ${s.eighth__section}`}>
                        </div>
                        <p>type:full price:200</p>
                        </div>
                    </div>
                </div>
            </div>
        </PortalModalRoot>
    )
}
export default SectionModal