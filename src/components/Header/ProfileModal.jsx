import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import s from './Modals.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material'
import { setAccount, setSections, setSettings, setSlots, setStats } from '../../store/Slices/profileModalSlice';


const ProfileModal = ({ setModal }) => {
  const { dispatchStats, dispatchAccount, dispatchSections, dispatchSlots, dispatchSettings } = useSelector(state => state.profileModal)
  const {log} = useSelector(state => state.log);
  const dispatch = useDispatch()
 const [activeOption, setActiveOption] = useState({
    stats: false,
    account: false,
    sections: false,
    slots: false,
    settings: false,
  });
  return (
    <PortalModalRoot>
      <div className={s.modal__inner__flexbox}>
        {log==true?
                <div className={s.modal__inner} onMouseLeave={() => {
                  setModal(false)
                }}>
                  <div className={s.menu}>
                    <div className={`${s.option} ${activeOption.stats == true ? s.active : ''}`}>
                      <p onMouseEnter={() => {
                        setActiveOption({ ...activeOption, stats: true })
                      }} onMouseLeave={() => {
                        setActiveOption({ ...activeOption, stats: false })
                      }}> <Link to="/profile" onClick={()=>{
                        setModal(false)
                        dispatch(setStats(true))
                      }} >Статистика</Link>              
                      </p>
                    </div>
                    <div className={`${s.option} ${activeOption.account == true ? s.active : ''}`}>
                      <p onMouseEnter={() => {
                        setActiveOption({ ...activeOption, account: true })
                      }} onMouseLeave={() => {
                        setActiveOption({ ...activeOption, account: false })
                      }}>
                        <NavLink to={"/profile#account"}onClick={()=>{
                        setModal(false)
                      }} >Аккаунт</NavLink>  
                      </p>
                    </div>
                    <div className={`${s.option} ${activeOption.sections == true ? s.active : ''}`}>
                      <p onMouseEnter={() => {
                        setActiveOption({ ...activeOption, sections: true })
                      }} onMouseLeave={() => {
                        setActiveOption({ ...activeOption, sections: false })
                      }}>
                        <Link to="/profile" onClick={()=>{
                        setModal(false)
                        dispatch(setSections(true))
                      }} >Секции</Link>  
                      </p>
                    </div>
                    <div className={`${s.option} ${activeOption.slots == true ? s.active : ''}`}>
                      <p onMouseEnter={() => {
                        setActiveOption({ ...activeOption, slots: true })
                      }} onMouseLeave={() => {
                        setActiveOption({ ...activeOption, slots: false })
                      }}>
                        <Link to="/profile" onClick={()=>{
                        setModal(false)
                        dispatch(setSlots(true))
                      }} >Слоты</Link>  
                      </p>
                    </div>
                    <div className={`${s.option} ${activeOption.settings == true ? s.active : ''}`}>
                      <p onMouseEnter={() => {
                        setActiveOption({ ...activeOption, settings: true })
                      }} onMouseLeave={() => {
                        setActiveOption({ ...activeOption, settings: false })
                      }}>
                        <Link to="/profile" onClick={()=>{
                        setModal(false)
                        dispatch(setSettings(true))
                      }} >Настройки</Link>  
                      </p>
                    </div>
                  </div>
                </div>
        :<div className={s.modal__inner} onMouseLeave={() => {
          setModal(false)
        }}>
          <h3>Вы не авторизованы</h3>
          <Button variant='contained' onClick={()=>{
            setModal(false)
          }}><Link style={{color:"#fff"}} to='/profile'>Войти</Link></Button>
          </div>}

      </div>
    </PortalModalRoot>
  );
};

export default ProfileModal;
