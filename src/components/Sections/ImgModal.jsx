import React, { useState } from 'react'
import PortalModalRoot from '../Portals/PortalModalRoot'
import s from './Block.module.css'
import { Button } from '@mui/material'
import add from '../../img/add.png'
const ImgModal = ({ close,previewUrl,handleFileChange }) => {


    return (

        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.photo__wrap}>
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" />
                    ) : (<div className={s.photo__inner} >
                        <p>some text</p>
                        <div className={s.file__button}>
                            <img src={add} alt="" />
                            <input type="file" name="" id="" onChange={handleFileChange} />
                        </div>
                    </div>
                    )}


                </div>
                <div className={s.buttons__wrap}>
                    <Button variant='contained' onClick={close}>закрыть</Button>
                    <Button variant='contained' onClick={close}>сохранить</Button>
                </div>
            </div>
        </PortalModalRoot>
    )
}

export default ImgModal