import React from "react";
import s from './Footer.module.css'
import instagram from '../../img/insta.png'
import tiktok from '../../img/tiktok.png'
import telegram from '../../img/telegram.png'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className={s.wrap}>
            <div className={s.inner}>
                <div className={s.column}>
                    <Link to='/'>                    
                    <div className={s.logo}></div>
                    </Link>
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
                    <Link to='/'><p>Главная</p></Link>
                    <Link to='/profile'><p>Профиль</p></Link>
                    <p>Магазин</p>
                </div>
                <div className={s.column}>
                    <h3>Важная информация</h3>
                    <Link to='/police'><p>Политика конфидециальности</p></Link>
                    <Link to='/instruction'><p>Инструкция</p></Link>
                </div>

            </div>
        </div>
    )
}
export default Footer;