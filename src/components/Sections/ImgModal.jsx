import React from 'react'
import PortalModalRoot from '../Portals/PortalModalRoot'
import s from './Block.module.css'
import { Button } from '@mui/material'
import add from '../../img/add.png'
const ImgModal = ({ setImg }) => {
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.photo__wrap}>
                    <div className={s.photo__inner}>
                        <p>some text</p>
                        <div className={s.file__button}>
                        <img src={add} alt=""></img>
                        <input type="file" name="" id="" />
                        </div>

                    </div>
                </div>
                <div className={s.buttons__wrap}>
                    <Button variant='contained' onClick={() => {
                        setImg(false)
                    }}>закрыть</Button>
                    <Button variant='contained' onClick={() => {
                        setImg(false)
                    }}>сохранить</Button>
                </div>
            </div>
        </PortalModalRoot>
    )
}

export default ImgModal