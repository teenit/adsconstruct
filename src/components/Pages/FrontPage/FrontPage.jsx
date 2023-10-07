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
import Sections from '../../Sections/Sections'

const FrontPage = () => {
    const mas = [
        {
            userName: "name",
            userNickname: "id",
            buyTime: "12.09.2023 13:44",
            property: {
                defend: true,
                defendTo: "13.09.2023 19:44",
            },
            id: "",
            type: 8,
            position: 1,
            blocks: [{
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 7,
                idSection:""
            }, {
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 2,
                idSection:""
            },
]
        },
        {
            userName: "name",
            userNickname: "id",
            buyTime: "12.09.2023 13:44",
            property: {
                defend: true,
                defendTo: "13.09.2023 19:44",
            },
            id: "",
            type: 2,
            position: 2,
            blocks: [{
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 1,
                idSection:""
            }
]
        },

    ]
    const { sections } = useSelector(state => state.sections);
    return (
        <div className={s.wrap}>
            <Sections data={mas[0]}/>
            <Sections data={mas[1]}/>
            
        </div>




    )
}
export default FrontPage;