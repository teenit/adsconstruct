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

const FrontPage = ()=>{

    const [state, setState] = useState({
        modal:false,
    })

    return(
        <div className={s.wrap}>
            <NavLink to={'instruction'}>instruction</NavLink>
            <NavLink to={'profile'}>profile</NavLink>
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