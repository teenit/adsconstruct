import React, { useState } from 'react';
import s from './BuySection.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { Alert, Button, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { minusBalans } from '../../store/Slices/balansSlice';
import copy from '../../img/copy.png';

const ConfirmModal = ({ setModal, itemSection, setSectionModal }) => {
    const dispatch = useDispatch();
    const { tvmpCoin } = useSelector(state => state.tvmpCoin);
    const [open, setOpen] = useState(false);
    const [buy, setBuy] = useState(false)
    var [sectionData, setSectionData] = useState({
        name: "",
        type: itemSection.type,
        isUsed: false,
        price: itemSection.price,
        blocks: Array(8).fill(null)
    })

    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.input__wrap}>
                    <label htmlFor="name">
                        <p>Название секции</p>
                    </label>
                    <TextField variant='outlined' id='name' value={sectionData.name} onChange={(e) => {
                        setSectionData({ ...sectionData, name: e.target.value })
                    }} />
                </div>

                <Snackbar open={open} autoHideDuration={3000} onClose={() => {
                    setOpen(false)
                }}>
                    <Alert severity="success">
                        Ссылка скопирована
                    </Alert>
                </Snackbar>
                <p>Тип секции: {itemSection.type}</p>
                <p>Цена секции: {itemSection.price}</p>
                <p id="balance">Баланс: {tvmpCoin}</p>
                {buy == false ?
                    <div className={s.buttons__wrap}>

                        <Button variant='contained' onClick={() => {
                            if (tvmpCoin >= itemSection.price) {
                                dispatch(minusBalans(itemSection.price))
                                setBuy(true)
                            } else {
                                document.getElementById("balance").style.color = "red"

                            }
                        }}>Купить</Button>

                        <Button variant='contained' onClick={() => {
                            setModal()
                        }}>Отмена</Button>
                    </div>
                    : <div className={s.buy__confirm}>
                        <div className={s.input__wrap}>
                            <p>Ссылка на секцию</p>
                            <div className={s.copy__wrap}>
                                <input className={s.copy__input} id='text' disabled />
                                <div className={s.copy__button} onClick={() => {
                                    setOpen(true)
                                    navigator.clipboard.writeText("link")
                                }}>
                                    <img src={copy} alt="Копировать ссылку" />
                                </div>
                            </div>
                        </div>
                        <Button variant='contained' onClick={() => {
                            setModal({ active: false })
                            setSectionModal(false)
                        }}>На главную</Button>
                    </div>}

            </div>
        </PortalModalRoot>
    );
}

export default ConfirmModal;
