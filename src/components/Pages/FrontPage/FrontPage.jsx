import React, { useState } from "react";
import s from "./frontPage.module.css";

import Sections from '../../Sections/Sections'
import { useSelector } from "react-redux";

const FrontPage = () => {


    const data = useSelector(state => state.sections.data);
    
    return (
        <div className={s.wrap}>
            <Sections data={data[2]} />
           
            

        </div>




    )
}
export default FrontPage;