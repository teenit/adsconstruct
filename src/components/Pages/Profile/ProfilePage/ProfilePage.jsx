import React, { useEffect, useState } from 'react'
import s from './ProfilePage.module.css'
import Stats from './Stats/Stats'
import Account from './Account/Account'
import Slots from './Slots/Slots'
import Settings from './Settings/Settings'
const ProfilePage = () => {
  const [activeOption, setActiveOption] = useState({
    stats: false,
    account: false,
    slots: false,
    settings: false,
  });
  const colorMas = [
    "rgba(255, 192, 203, 0.77)",
    "rgba(144, 238, 144, 0.77)",
    "rgba(255, 255, 153, 0.77)",
    "rgba(173, 216, 230, 0.77)",
    "rgba(255, 165, 0, 0.77)",
    "rgba(138, 43, 226, 0.77)",
    "rgba(70, 130, 180, 0.77)",
    "rgba(152, 251, 152, 0.77)",
    "rgba(221, 160, 221, 0.77)",
    "rgba(240, 128, 128, 0.77)"
  ];
  
  
  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={s.wrap}>
      <h2>Профиль</h2>
      <div className={s.inner}>
        <div className={scroll > 150 ? `${s.menu} ${s.special}` : s.menu}>
          <div className={`${s.option} ${activeOption.stats == true&&Math.floor(document.getElementById("stats").getBoundingClientRect().top) == 0? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: true, account: false, slots: false, settings: false })
              document.getElementById("stats").scrollIntoView({block:'start', behavior:"smooth"})
            }}>Статистика
            </p>
          </div>
          <div className={`${s.option} ${activeOption.account == true&&Math.floor(document.getElementById("account").getBoundingClientRect().top) == 0 ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: false, account: true, slots: false, settings: false })
              document.getElementById("account").scrollIntoView({block:'start', behavior:"smooth"})
            }}>Аккаунт
            </p>
          </div>
          <div className={`${s.option} ${activeOption.slots == true&&Math.floor(document.getElementById("slots").getBoundingClientRect().top) == 0 ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: false, account: false, slots: true, settings: false })
              document.getElementById("slots").scrollIntoView({block:'start', behavior:"smooth"})
            }}>Слоты
            </p>
          </div>
          <div className={`${s.option} ${activeOption.settings == true&&Math.floor(document.getElementById("settings").getBoundingClientRect().top) == 0 ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: false, account: false, slots: false, settings: true })
              document.getElementById("settings").scrollIntoView({block:'start', behavior:"smooth"})
            }}>Настройки
            </p>
          </div>

        </div>
        <div className={s.content}>
          <div className={s.title} id='stats'>
            <h2>Статистика</h2>
          </div>
            <Stats colorMas = {colorMas}/>
          <div className={s.title} id='account'>
            <h2>Аккаунт</h2>
          </div>
            <Account colorMas={colorMas}/>
          <div className={s.title} id='slots'>
            <h2>Слоты</h2>
          </div>
            <Slots colorMas = {colorMas}/>
          <div className={s.title} id='settings'>
            <h2>Настройки</h2>
          </div>
            <Settings colorMas={colorMas}/>
        </div>
      </div>
    </div>

  )
}

export default ProfilePage