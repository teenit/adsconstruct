import React, { useState } from 'react'
import s from './Settings.module.css'
import PortalModalRoot from '../../../../Portals/PortalModalRoot'
import { Button, MenuItem, Select, TextField } from '@mui/material'
import Cards from 'react-credit-cards';
const PaymentModal = ({ setModal }) => {
    const [type, setType] = useState({
        paypal: false,
        card: false
    })
    const [data, setData] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    })
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <h3>Добавить метод оплаты</h3>
                <div className={s.modal__option}>
                    <p>Тип</p>
                    <Select value={type.paypal ? "PayPal" : "Банковская карта"}>
                        <MenuItem value="PayPal" onClick={() => { setType({ ...type, paypal: true, card: false }) }}>PayPal</MenuItem>
                        <MenuItem value="Банковская карта" onClick={() => { setType({ ...type, paypal: false, card: true }) }}>Банковская карта</MenuItem>
                    </Select>
                </div>
                {type.card ?
                    <div>
                        <Cards
                            cvc={data.cvc}
                            expiry={data.expiry}
                            focused={data.focus}
                            name={data.name}
                            number={data.number}
                        />
                        <div className={s.modal__option}>
                            <label htmlFor="number">Номер карты</label>
                            <TextField required variant='outlined' type="number"
                                id='number'
                                placeholder="Card Number"
                                onChange={(e) => {
                                    setData({ ...data, number: e.target.value })
                                }} />
                        </div>
                        <div className={s.modal__option}>
                            <label htmlFor="name">Имя владельца</label>
                            <TextField required variant='outlined'
                                id='name'
                                placeholder="Имя владельца"
                                onChange={(e) => {
                                    setData({ ...data, name: e.target.value })
                                }} />
                        </div>
                        <div className={s.modal__option}>
                            <label htmlFor="number">CVC Код</label>
                            <TextField required variant='outlined' type="number"
                                id='number'
                                placeholder="CVC Код"
                                onChange={(e) => {
                                    setData({ ...data, cvc: e.target.value })
                                }} />
                        </div>
                    </div>


                    : null}
                <Button variant='contained' onClick={() => {
                    setModal()
                }}>Сохранить</Button>
                <Button className={s.red__button} variant='contained' onClick={() => {
                    setModal()
                }}>Отмена</Button>
            </div>
        </PortalModalRoot>
    )
}

export default PaymentModal