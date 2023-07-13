import React, { useState } from "react";
import s from "./frontPage.module.css";
import ProfileNavModule from "./ProfileNavModule";

const FrontPage = ()=>{

    const [state, setState] = useState({
        modal:false
    })

    return(
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
    )
}
export default FrontPage;