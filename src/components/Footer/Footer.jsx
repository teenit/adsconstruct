import React from "react";
import s from './Footer.module.css'
import instagram from '../../img/insta.png'
import tiktok from '../../img/tiktok.png'
import telegram from '../../img/telegram.png'
const Footer = () => {
    return (
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.column}>
                    <div className={s.logo}><a href="#"></a></div>
                    <p>© 2023 ADS Constructor</p>
                    <p>email@gmail.com</p>
                    <div className={s.networks__panel}>
                        <div className={s.network}>
                            <a href="">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                        <div className={s.network}>
                            <a href="">
                                <img src={tiktok} alt="" />
                            </a>
                        </div>
                        <div className={s.network}>
                            <a href="">
                                <img src={telegram} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.column}>
                    <h2>ADS Constructor -</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
                        nemo molestiae, corrupti nam velit sit tempore dolor illum minima saepe corporis
                        cupiditate, mollitia alias cumque libero a soluta similique architecto.</p>
                </div>
                <div className={s.column}>
                    <h3>Популярные ссылки</h3>
                    <p>Главная</p>
                    <p>О нас</p>
                </div>
                <div className={s.column}>
                    <h3>Важная информация</h3>
                    <p>Политика конфидециальности</p>
                    <p>Условия использования</p>
                    <p>Лицензия</p>
                </div>

            </div>
        </div>
    )
}
export default Footer;