import React, { useState } from "react";
import s from "./frontPage.module.css";
import ProfileNavModule from "./ProfileNavModule";
import Profile from './Pages/Profile/Profile'

const FrontPage = ()=>{

    const [state, setState] = useState({
        modal:false,
    })

    return(
        <Profile />
        // <div className={s.wrap}>
        //     <div className={s.wrap__96}>
        //         <div className={s.module}>
        //             <button onClick={()=>setState({...state,modal:true})}>Открыть окно</button>
        //         </div>
        //     </div>
        //     {state.modal ?<ProfileNavModule close = {()=>setState({...state,modal:false})} />:null} 
        // </div>
    )
}
export default FrontPage;