import React from 'react'
import s from './Sections.module.css'
import PortalModalRoot from '../../../../Portals/PortalModalRoot'
import { Button, TextField } from '@mui/material'

const EditSection = ({setSectionsData,setModal,item,dataItem}) => {
  return (
    <PortalModalRoot>
        <div className={s.modal__inner}>
            <h3>Редактировать секцию</h3>
            <div className={s.edit__option}>
                <label htmlFor="title">
                    <p>Название секции</p>
                </label>
                <TextField variant='outlined' id='title' value={dataItem.title} onChange={(e)=>{
                      setSectionsData({...item,data:{...dataItem,title:e.target.value}})

                }}></TextField>
            </div>
        <Button variant='contained' onClick={()=>{
            setModal(false)
        }}>сохранить</Button>
        </div>
    </PortalModalRoot>
  )
}

export default EditSection