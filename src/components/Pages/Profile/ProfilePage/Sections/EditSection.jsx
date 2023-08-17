import React, { useState } from 'react'
import s from './Sections.module.css'
import PortalModalRoot from '../../../../Portals/PortalModalRoot'
import { Button, TextField } from '@mui/material'
import ConfirmModal from './ConfirmModal'
import { useSelector } from 'react-redux'

const EditSection = ({setData,setModal,dataItem, data}) => {
    const [confirmModal, setConfirmModal] = useState(false)
    const { sections,count } = useSelector(state => state.sections);

  return (
    <PortalModalRoot>
        <div className={s.modal__inner}>
            <h3>Редактировать секцию</h3>
            <div className={s.edit__option}>
                <label htmlFor="title">
                    <p>Название секции</p>
                </label>
                <TextField variant='outlined' id='title' value={dataItem.name} onChange={(e)=>{
                      setData({...data,data:[{...dataItem,name:e.target.value}]})

                }}></TextField>
            </div>
        <Button variant='contained' onClick={()=>{
            setModal(false)
        }}>сохранить</Button>
        <Button className={s.red__button} variant='contained' onClick={()=>{
            setConfirmModal(true)
            console.log(sections.indexOf(dataItem));
        }}>Продать секцию</Button>
        </div>
        {confirmModal?<ConfirmModal setModal={setModal} setConfirmModal={setConfirmModal} dataItem={dataItem}/>:null}
    </PortalModalRoot>
  )
}

export default EditSection