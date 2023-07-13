import React, { useState } from "react";
import s from "./frontPage.module.css";
import ProfileNavModule from "./ProfileNavModule";
import Profile from './Pages/Profile/Profile'

const FrontPage = ()=>{

    const [state, setState] = useState({
        modal:false,
    })

    return(
<<<<<<< HEAD
        <div className={s.wrap}>
            <div className={s.module}>
                   <div className={s.blocks1}>
                   <div className={s.block}></div>
                   </div>
                   </div>
                   <div className={s.module}>
                   <div className={s.blocks2}></div>
                   <div className={s.block}>  </div>
                   <div className={s.block}></div>
                 
                   </div>
                   <div className={s.module}>
                   <div className={s.blocks3}></div>
                   <div className={s.block}>  </div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>

                   </div>

                   <div className={s.module}>
                   <div className={s.blocks4}>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   
                   </div>
            </div>
                   
                   <div className={s.module}>
                   <div className={s.blocks5}></div>
                   <div className={s.block}>  </div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                 
                   </div>
                   <div className={s.module}>
                   <div className={s.blocks6}></div>
                   <div className={s.block}>  </div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                 
                   </div>
                   <div className={s.module}>
                   <div className={s.blocks7}></div>
                   <div className={s.block}>  </div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                 
                   </div>

                <div className={s.module}>
                   <div className={s.blocks8}>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   <div className={s.block}></div>
                   </div>
                
            </div>
          
            {state.modal ?<ProfileNavModule close = {()=>setState({...state,modal:false})} />:null} 
        </div>
=======
        <Profile />
        // <div className={s.wrap}>
        //     <div className={s.wrap__96}>
        //         <div className={s.module}>
        //             <button onClick={()=>setState({...state,modal:true})}>Открыть окно</button>
        //         </div>
        //     </div>
        //     {state.modal ?<ProfileNavModule close = {()=>setState({...state,modal:false})} />:null} 
        // </div>
>>>>>>> profile-page
    )
}
export default FrontPage;