import React, { useState } from 'react';
import { Link } from "react-router-dom";
import s from './Modals.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';

const ProfileModal = ({ setModal }) => {
 const [activeOption, setActiveOption] = useState({
    profile: false,
    ads: false,
    stats: false,
    settings: false,
  });

  return (
    <PortalModalRoot>
      <div className={s.modal__inner__flexbox}>
        <div className={s.modal__inner} onMouseLeave={() => {
          setModal(false)
        }}>
          <div className={s.menu}>
            <div className={`${s.option} ${activeOption.profile == true ? s.active : ''}`}>
              <p onMouseEnter={() => {
                setActiveOption({ ...activeOption, profile: true })
              }} onMouseLeave={() => {
                setActiveOption({ ...activeOption, profile: false })
              }}> <Link to="/profile" >Профиль</Link>              
              </p>
            </div>
            <div className={`${s.option} ${activeOption.ads == true ? s.active : ''}`}>
              <p onMouseEnter={() => {
                setActiveOption({ ...activeOption, ads: true })
              }} onMouseLeave={() => {
                setActiveOption({ ...activeOption, ads: false })
              }}>
                Ваша реклама
              </p>
            </div>
            <div className={`${s.option} ${activeOption.stats == true ? s.active : ''}`}>
              <p onMouseEnter={() => {
                setActiveOption({ ...activeOption, stats: true })
              }} onMouseLeave={() => {
                setActiveOption({ ...activeOption, stats: false })
              }}>
                Статистика
              </p>
            </div>
            <div className={`${s.option} ${activeOption.settings == true ? s.active : ''}`}>
              <p onMouseEnter={() => {
                setActiveOption({ ...activeOption, settings: true })
              }} onMouseLeave={() => {
                setActiveOption({ ...activeOption, settings: false })
              }}>
                Настройки
              </p>
            </div>
          </div>
          <div className={s.line}></div>
          <div className={s.content}></div>
        </div>
      </div>
    </PortalModalRoot>
  );
};

export default ProfileModal;
