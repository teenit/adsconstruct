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
import { useDispatch, useSelector } from "react-redux";
import { addBalans, minusBalans } from "../../../store/Slices/balansSlice";
import SectionModal from "./SectionModal";

const FrontPage = ()=>{
    const {tvmpCoin} = useSelector(state => state.tvmpCoin);
    console.log(tvmpCoin)
    const [state, setState] = useState({
        activeModal:true,
    })
    const dispatch = useDispatch()
    function test(){

        dispatch(minusBalans(5))
        console.log(tvmpCoin)
    }
    return(
        <div className={s.wrap}>
            <NavLink to={'instruction'}>instruction</NavLink>
            <NavLink to={'police'}>police</NavLink>
            <NavLink to={'profile'}>profile</NavLink>
            <button onClick={test}>add</button>
            
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