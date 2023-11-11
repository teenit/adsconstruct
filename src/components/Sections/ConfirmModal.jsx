import React, { useState } from 'react';
import s from './Block.module.css';
import PortalModalRoot from '../Portals/PortalModalRoot';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import copy from '../../img/copy.png';
import { minusBalans } from '../../store/Slices/balansSlice';
import Alert from '@mui/material/Alert';
import { setSection } from '../../store/Slices/sectionSlice';
const ConfirmModal = ({ setModal, activeIndex, setBlockModal, data }) => {
    const [buy, setBuy] = useState(false)
    const dispatch = useDispatch()
    var obj = {
        userName: "",
        userNickname: "",
        id: "",
        buyTime: "12.09.2023 13:44",
        property: {
            defend: true,
            defendTo: "13.09.2023 19:44",
        },
        position: activeIndex,
        idSection: "",
        elements: []
    }
    const { tvmpCoin } = useSelector(state => state.tvmpCoin)
    const blockPrice = 50;
    const [error, setError] = useState({
        money: false,
        alreadyBought: false
    })
    const takenPositions = data.blocks.map((item) => item.position);
    const [blockData,setBlockData] = useState(data.blocks)
    console.log(data)
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
                {!buy ?
                    <div className={s.buttons__wrap} >

                        <Button variant='contained' onClick={() => {
                            if (tvmpCoin >= blockPrice && !takenPositions.some(item => item == activeIndex)) {
                                dispatch(minusBalans(blockPrice))
                                setBuy(true)
                                dispatch(setSection(obj))
                                console.log(data);
                            } else if (tvmpCoin < blockPrice) {
                                setError({ ...error, money: true })
                            } else {
                                setError({ ...error, alreadyBought: true })
                            }

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
            {error.money ? (
                <Alert variant="filled" severity="error" style={{ position: "absolute" }}>
                    Недостаточно денег для покупки блока
                </Alert>
            ) : null}
            {error.alreadyBought ? (
                <Alert variant="filled" severity="error" style={{ position: "absolute" }}>
                    Вы уже купили этот блок
                </Alert>
            ) : null}

        </PortalModalRoot>
    );
}

export default ConfirmModal;
