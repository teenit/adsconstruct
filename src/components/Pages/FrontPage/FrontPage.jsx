import React, { useState } from "react";
import s from "./frontPage.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBalans, minusBalans } from "../../../store/Slices/balansSlice";



const FrontPage = ()=>{
    const {tvmpCoin} = useSelector(state => state.tvmpCoin);

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

        </div>

       
    

    )
}
export default FrontPage;