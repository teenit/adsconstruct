import React, { useState } from 'react'
import PortalModalRoot from '../Portals/PortalModalRoot'
import s from "./Modals.module.css"
import { Button, MenuItem, Select, TextField } from '@mui/material'


const BuyModal = ({ setModal }) => {
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState({
        paypal: false,
        card: false
    })
    return (
        <PortalModalRoot>
            <div className={s.buy__modal__inner}>
                <h3>Купить валюту</h3>
                <div className={s.buy__option}>
                    <p>Количество</p>
                    <TextField type='number' variant='outlined' onChange={(e) => {
                        setAmount(e.target.value)
                    }} onKeyDown={(e) => {
                        if (e.key == '.') {
                            e.preventDefault()
                        }
                    }} />
                </div>
                <div className={s.buy__option}>
                    <p>Способ оплаты</p>
                    <Select value={type.paypal ? "PayPal" : "Банковская карта"}>
                        <MenuItem value="PayPal" onClick={() => { setType({ ...type, paypal: true, card: false }) }}>PayPal</MenuItem>
                        <MenuItem value="Банковская карта" onClick={() => { setType({ ...type, paypal: false, card: true }) }}>Банковская карта</MenuItem>
                    </Select>
                </div>
                <p>Это будет стоить {(amount / 4).toFixed(2)}</p>
                <Button variant='contained'>перейти к оплате</Button>
                <Button className={s.red__button} variant='contained' onClick={setModal}>Отмена</Button>
            </div>
        </PortalModalRoot>
    )
}

export default BuyModal