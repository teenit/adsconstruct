import React, { useState } from 'react';
import s from './Block.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { Alert, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import copy from '../../img/copy.png';
import { minusBalans } from '../../store/Slices/balansSlice';
import { editBlocks } from '../../store/Slices/sectionSlice';

const ConfirmModal = ({ setModal, activeIndex, setBlockModal }) => {
    const dispatch = useDispatch()
    const [buy, setBuy] = useState(false)
    const { tvmpCoin } = useSelector(state => state.tvmpCoin)
    const { blocks } = useSelector(state => state.sections)
    const blockPrice = Math.floor(50 / blocks.length)
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.input__wrap}>
                    <label htmlFor="name">
                        <p>Название блока</p>
                    </label>
                    <TextField variant='outlined' id='name' />
                </div>
                <p>Порядок блока: {activeIndex + 1}</p>
                <p>Цена секции: {blockPrice}</p>
                <p id="balance">Баланс: {tvmpCoin}</p>
                {buy == false ?
                    <div className={s.buttons__wrap} >

                        <Button variant='contained' onClick={() => {

                            dispatch(editBlocks(activeIndex))
                            console.log(blocks);
                            dispatch(minusBalans(blockPrice))
                            setBuy(true)

                        }}>Купить</Button>

                        <Button variant='contained' onClick={setModal}>Отмена</Button>
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
                        <Button variant='contained' onClick={() => {
                            setModal()
                            setBlockModal()
                        }}>На главную</Button>
                    </div>}

            </div>
        </PortalModalRoot>
    );
}

export default ConfirmModal;
