import React, { useState } from 'react';
import s from './Block.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { Alert, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import copy from '../../img/copy.png';
import { setUsedBlocks } from '../../store/Slices/sectionSlice';

const ConfirmModal = ({setModal,index, setBlockModal, changeUsedSections, usedSections}) => {
    const { tvmpCoin } = useSelector(state => state.tvmpCoin);
    const dispatch = useDispatch()
    const [buy, setBuy] = useState(false)
    const [blockData,setBlockData] = useState({
        title:""
    })
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.input__wrap}>
                    <label htmlFor="name">
                        <p>Название блока</p>
                    </label>
                    <TextField variant='outlined' id='name' onChange={(e) => {
                        setBlockData({...blockData,title:e.target.value})
                    }} />
                </div>
                <p>Порядок блока: {index+1}</p>
                <p>Цена секции: 1000</p>
                <p id="balance">Баланс: {tvmpCoin}</p>
                {buy == false ?
                    <div className={s.buttons__wrap}>

                        <Button variant='contained' onClick={()=>{
                            changeUsedSections()
                            dispatch(setUsedBlocks(usedSections))
                            setBuy(true)
                        }}>Купить</Button>

                        <Button variant='contained' onClick={()=>{
                            setModal()
                        }}>Отмена</Button>
                    </div>
                    : <div className={s.buy__confirm}>
                        <div className={s.input__wrap}>
                            <p>Ссылка на секцию</p>
                            <div className={s.copy__wrap}>
                                <input className={s.copy__input} id='text' disabled />
                                <div className={s.copy__button} onClick={() => {
                                    navigator.clipboard.writeText("link")
                                }}>
                                    <img src={copy} alt="Копировать ссылку" />
                                </div>
                            </div>
                        </div>
                        <Button variant='contained' onClick={()=>{
                            setModal()
                            setBlockModal()
                        }}>На главную</Button>
                    </div>}

            </div>
        </PortalModalRoot>
    );
}

export default ConfirmModal;
