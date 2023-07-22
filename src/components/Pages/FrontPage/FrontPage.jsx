import React, { useState } from "react";
import s from "./frontPage.module.css";
import { NavLink } from "react-router-dom";
import SectionOne from "../../Sections/SectionOne/SectionOne";
import SectionTwo from "../../Sections/SectionTwo/SectionTwo";
import SectionThree from "../../Sections/SectionThree/SectionThree";
import SectionFour from "../../Sections/SectionFour/SectionFour";
import SectionFive from "../../Sections/SectionFive/SectionFive";
import SectionSix from "../../Sections/SectionSix/SectionSix";
import SectionSeven from "../../Sections/SectionSeven/SectionSeven";
import SectionEight from "../../Sections/SectionEight/SectionEight";
import PortalModalRoot from "../../Portals/PortalModalRoot";

const FrontPage = ()=>{

    const [state, setState] = useState({
        activeModal:true,
    })

    return(
        <div className={s.wrap}>
            <NavLink to={'instruction'}>instruction</NavLink>
            <NavLink to={'police'}>police</NavLink>
            <NavLink to={'profile'}>profile</NavLink>
            {
                state.activeModal ? <PortalModalRoot>
                    <div className={s.t0}>
                        <div className={s.close} onClick={()=>{setState({...state,activeModal:false})}}></div>
                        <div className={s.form}>
                            <div className={s.top}>Выберите тип слота</div>
                            <div className={s.mid}>
                                <div className={s.full}></div>
                                <div className={s.half}></div>
                                <div className={s.quarter}></div>
                                <div className={s.eighth}></div>
                            </div>
                        </div>
                    </div>
                </PortalModalRoot> : null
            }
            
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>     
            <SectionSix/>    
            <SectionSeven/>
            <SectionEight/>
        </div>

       
    

    )
}
export default FrontPage;