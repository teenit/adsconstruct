import React, { useState } from "react";
import s from "./frontPage.module.css";
import ProfileNavModule from "./ProfileNavModule";

const FrontPage = ()=>{

    const [state, setState] = useState({
        modal:false
    })

    return(
        <div className={s.wrap}>
            <div className={s.wrap__100}>
            </div>
            {state.modal ?<ProfileNavModule close = {()=>setState({...state,modal:false})} />:null} 
        </div>
    )
}
export default FrontPage;