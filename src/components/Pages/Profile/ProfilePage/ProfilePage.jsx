import React, { useEffect, useState } from 'react'
import s from './ProfilePage.module.css'
import Account from './Account'
import Stats from './Stats'
import Settings from './Settings'
import Ad from './Ad'

const ProfilePage = () => {
  const [activeOption, setActiveOption] = useState({
    stats: false,
    account: false,
    ads: false,
    settings: false,
  });
  const [scroll, setScroll] = useState(0)
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={s.wrap}>
      <h2>Профиль</h2>
      <div className={s.inner}>
        <div className={scroll > 150 ? `${s.menu} ${s.special}` : s.menu}>
          <div className={`${s.option} ${activeOption.stats == true ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: true, account: false, ads: false, settings: false })
            }}>Статистика
            </p>
          </div>
          <div className={`${s.option} ${activeOption.account == true ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: false, account: true, ads: false, settings: false })
            }}>Аккаунт
            </p>
          </div>
          <div className={`${s.option} ${activeOption.ads == true ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: false, account: false, ads: true, settings: false })
            }}>Реклама
            </p>
          </div>
          <div className={`${s.option} ${activeOption.settings == true ? s.active : ''}`}>
            <p onClick={() => {
              setActiveOption({ ...activeOption, stats: false, account: false, ads: false, settings: true })
            }}>Настройки
            </p>
          </div>

        </div>
        <div className={s.content}>
          <div className={s.title}>
            <h2>Статистика</h2>
          </div>
            <Stats/>

          <div className={s.title}>
            <h2>Аккаунт</h2>
          </div>
            <Account/>
          <div className={s.title}>
            <h2>Реклама</h2>
          </div>
            <Ad/>
          <div className={s.title}>
            <h2>Настройки</h2>
          </div>
            <Settings/>
        </div>
      </div>
    </div>

  )
}

export default ProfilePage