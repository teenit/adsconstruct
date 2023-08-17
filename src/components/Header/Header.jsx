import React, { useState } from "react";
import s from "./style.module.css"
import { Button} from "@mui/material";
import shop from '../../img/corz.png'
import ProfileModal from "./ProfileModal";
import Lang from "./Lang";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import add from '../../img/add-white.png'
import SectionModal from "../BuySection/SectionModal";
import Search from "./Search/SearchMain";
import BuyModal from "./BuyModal";

const Header = () => {
    const { tvmpCoin } = useSelector(state => state.tvmpCoin)
    const { log } = useSelector(state => state.log)
    const [profileModal, setProfileModal] = useState(false)
    const [sectionModal, setSectionModal] = useState(false)
    const [modal,setModal] = useState({
        buy:false
    })
    return (
        
        <div className={s.header}>
            <div className={s.logo__wrap}>
                <Link to='/'><div className={s.logo}></div></Link>
            </div>
            <div className={s.header__inner}>
                <div className={s.inner__block}>
                    <p>Баланс: <span><b>{tvmpCoin}</b></span></p>
                    <Button className={s.buy__button} variant="contained" onClick={()=>{
                        setModal({...modal,buy:true})
                    }}>
                        <p>купить</p>
                        <div className={s.img__wrap}>
                            <a href="#"><img src={shop} alt="Логотип" /></a>
                        </div>
                    </Button>
                    {modal.buy?<BuyModal setModal = {()=>{setModal({...modal,buy:false})}}/>:null}
                    <Lang />


                </div>

                <div className={s.inner__block}>
                    <div className={s.header__menu}>
                       <Search />
                        <div className={s.line}></div>
                        <p onMouseEnter={() => {
                            setProfileModal(true)
                        }}>Профиль</p>
                        {profileModal == true ? <ProfileModal setModal={setProfileModal} /> : null}
                        <div className={s.line}></div>
                        <Link to='/instruction'><p>Инструкция</p></Link>
                        <div className={s.line}></div>
                        {log==true?
                        <div className={s.img__wrap} onClick={()=>{
                            setSectionModal(true)
                        }}>
                            <img src={add} alt="" />
                        </div>
                        :null}
                        {sectionModal == true?<SectionModal setSectionModal = {setSectionModal} />: null}
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Header;