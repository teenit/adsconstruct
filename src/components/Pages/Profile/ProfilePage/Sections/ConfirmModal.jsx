import React from 'react'
import PortalModalRoot from '../../../../Portals/PortalModalRoot'
import s from './Sections.module.css'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { removeSection, setCount } from '../../../../../store/Slices/sectionSlice'
import { addBalans } from '../../../../../store/Slices/balansSlice'


const ConfirmModal = ({setModal,setConfirmModal,dataItem}) => {
    const dispatch = useDispatch()
    const returnPrice = Number((dataItem.price/4).toFixed())
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <h3>Вы уверены, что хотите продать эту секцию? </h3>
                <p>При продаже данной секции вы получите {returnPrice} </p>
                <Button className={s.red__button} variant='contained' onClick={() => {
                    setModal(false)
                    setConfirmModal(false)
                    dispatch(setCount(-1))
                    dispatch(addBalans(returnPrice))
                    dispatch(removeSection(dataItem))
                }}>Продать секцию</Button>
                <Button className={s.red__button} variant='contained' onClick={() => {
                    setConfirmModal(false)
                }}>Отмена</Button>
            </div>
        </PortalModalRoot>
    )
}

export default ConfirmModal