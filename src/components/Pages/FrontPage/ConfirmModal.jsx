import React from 'react'
import s from './frontPage.module.css'
import PortalModalRoot from '../../Portals/PortalModalRoot'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { minusBalans } from '../../../store/Slices/balansSlice'
import { setSection } from '../../../store/Slices/sectionSlice'

const ConfirmModal = ({setModal,itemSection,setSectionModal}) => {
    const dispatch = useDispatch()
    const {tvmpCoin} = useSelector(state => state.tvmpCoin)
  return (
    <PortalModalRoot>
        <div className={s.modal__inner}>
            <Button variant='contained' onClick={()=>{
                if(tvmpCoin>=itemSection.price){
                    setModal({active:false})
                    setSectionModal(false)
                    dispatch(minusBalans(itemSection.price))
                    dispatch(setSection(itemSection.type))
                }else{
                    alert("error")
                }

            }}>Купить</Button>
            <Button variant='contained' onClick={()=>{
                    setModal({active:false,item:null})
                }}>Отмена</Button>
        </div>
    </PortalModalRoot>
  )
}

export default ConfirmModal