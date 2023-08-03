import React, { useState } from 'react';
import s from './BuySection.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { Alert, Button, TextField } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { minusBalans } from '../../store/Slices/balansSlice';
import { setCode, setSection } from '../../store/Slices/sectionSlice';
import { Link } from 'react-router-dom';
import copy from '../../img/copy.png';

const ConfirmModal = ({ setModal, itemSection, setSectionModal }) => {
    const dispatch = useDispatch();
    const { tvmpCoin } = useSelector(state => state.tvmpCoin);
    const [open, setOpen] = useState(false);

    const generateRandomCode = () => {
        const allowedChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let code = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            code += allowedChars[randomIndex];
        }

        return code;
    };

    const [randomCode, setRandomCode] = useState(generateRandomCode());

    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.input__wrap}>
                    <label htmlFor="name">
                        <p>Название секции</p>
                    </label>
                    <TextField variant='outlined' id='name' />
                </div>
                <div className={s.input__wrap}>
                    <p>Ссылка на секцию</p>
                    <div className={s.copy__wrap}>
                        <input className={s.copy__input} id='text' disabled value={"/section/"+randomCode} />
                        <div className={s.copy__button} onClick={() => {
                            setOpen(true)
                            navigator.clipboard.writeText("/section/"+randomCode)
                        }}>
                            <img src={copy} alt="Копировать ссылку" />
                        </div>
                    </div>
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
                <div className={s.buttons__wrap}>
                    <Link to={"section/" + randomCode}>
                        <Button variant='contained' onClick={() => {
                            if (tvmpCoin >= itemSection.price) {
                                setModal({ active: false })
                                setSectionModal(false)
                                dispatch(minusBalans(itemSection.price))
                                dispatch(setSection(itemSection.type))
                                dispatch(setCode(randomCode))
                            } else {
                                alert("error")
                            }
                        }}>Купить</Button>
                    </Link>
                    <Button variant='contained' onClick={() => {
                        setModal()
                    }}>Отмена</Button>
                </div>
            </div>
        </PortalModalRoot>
    );
}

export default ConfirmModal;
