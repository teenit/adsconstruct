import React, { useState } from 'react';
import { Link } from "react-router-dom";
import s from './Modals.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material'


const ProfileModal = ({ setModal }) => {
  const {log} = useSelector(state => state.log);
 const [activeOption, setActiveOption] = useState({
    stats: false,
    account: false,
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
                      }} >Статистика</Link>              
                      </p>
                    </div>
                    <div className={`${s.option} ${activeOption.account == true ? s.active : ''}`}>
                      <p onMouseEnter={() => {
                        setActiveOption({ ...activeOption, account: true })
                      }} onMouseLeave={() => {
                        setActiveOption({ ...activeOption, account: false })
                      }}>
                        <Link to="/profile" onClick={()=>{
                        setModal(false)
                      }} >Аккаунт</Link>  
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
