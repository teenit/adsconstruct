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


const FrontPage = () => {
    const { tvmpCoin } = useSelector(state => state.tvmpCoin);
    const { sections } = useSelector(state => state.sections);

    console.log(tvmpCoin)
    const dispatch = useDispatch()
    function test() {

        dispatch(minusBalans(5))
        console.log(sections)
    }
    return (
        <div className={s.wrap}>
            <NavLink to={'instruction'}>instruction</NavLink>
            <NavLink to={'police'}>police</NavLink>
            <NavLink to={'profile'}>profile</NavLink>
            <button onClick={test}>add</button>
            {sections.map((item, index) => {
                return (
                    <div className={s.wrap}>
                        {item.type == "full" ? <SectionOne key={index} /> : null}
                        {item.type == "1/2" ? <SectionTwo key={index} /> : null}
                        {item.type == "1/3" ? <SectionThree key={index} /> : null}
                        {item.type == "1/4" ? <SectionFour key={index} /> : null}
                        {item.type == "1/5" ? <SectionFive key={index} /> : null}
                        {item.type == "1/6" ? <SectionSix key={index} /> : null}
                        {item.type == "1/7" ? <SectionSeven key={index} /> : null}
                        {item.type == "1/8" ? <SectionEight key={index} /> : null}
                    </div>
                )

            })}

        </div>




    )
}
export default FrontPage;