import React, { useState } from "react";
import s from "./frontPage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBalans, minusBalans } from "../../../store/Slices/balansSlice";
import SectionOne from '../../Sections/SectionOne/SectionOne'
import SectionTwo from '../../Sections/SectionTwo/SectionTwo'
import SectionThree from '../../Sections/SectionThree/SectionThree'
import SectionFour from '../../Sections/SectionFour/SectionFour'
import SectionFive from '../../Sections/SectionFive/SectionFive'
import SectionSix from '../../Sections/SectionSix/SectionSix'
import SectionSeven from '../../Sections/SectionSeven/SectionSeven'
import SectionEight from '../../Sections/SectionEight/SectionEight'


const FrontPage = ()=>{
    const {tvmpCoin} = useSelector(state => state.tvmpCoin);
    const {sectionType} = useSelector(state => state.sectionType);
    console.log(tvmpCoin)
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
            {sectionType=="full"?<SectionOne/>:null}
            {sectionType=="1/2"?<SectionTwo/>:null}
            {sectionType=="1/3"?<SectionThree/>:null}
            {sectionType=="1/4"?<SectionFour/>:null}
            {sectionType=="1/5"?<SectionFive/>:null}
            {sectionType=="1/6"?<SectionSix/>:null}
            {sectionType=="1/7"?<SectionSeven/>:null}
            {sectionType=="1/8"?<SectionEight/>:null}
        </div>

       
    

    )
}
export default FrontPage;