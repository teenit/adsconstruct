import React, { useState } from 'react'
import PortalModalRoot from '../Portals/PortalModalRoot'
import s from './Block.module.css'
import { Button } from '@mui/material'
import ConfirmModal from './ConfirmModal'
import { useSelector } from 'react-redux'

const BlockModal = ({ close,data,active,setActive,buy }) => {
    const [confirmModal, setConfirmModal] = useState(false);

    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.title}>
                    <h3>Выберите блок из секции</h3>
                </div>
                <div className={`${s.section}
                    ${data.type === 2 ? s.second : null}
                    ${data.type === 3 ? s.third : null}
                    ${data.type === 4 ? s.fourth : null}
                    ${data.type === 5 ? s.fifth : null}
                    ${data.type === 6 ? s.sixth : null}
                    ${data.type === 7 ? s.seventh : null}
                    ${data.type === 8 ? s.eighth : null}
                `}>
                    {Array.from({length:data.type}).map((item, index) => (
                        <div key={index} className={`${!buy?s.mini__block:s.active} ${active === index ? s.active : null}`} onClick={() => {
                            setActive(index)
                        }}
                        ></div>
                    ))}
                </div>
                <Button variant='contained' onClick={() => {
                    setConfirmModal(true)
                }}>выбрать блок</Button>
                {confirmModal ? <ConfirmModal setBlockModal={close} setModal={() => { setConfirmModal(false) }} activeIndex={active} data={data}  /> : null}
                <Button variant='contained' className={s.red__button} onClick={close}>отмена</Button>
            </div>
        </PortalModalRoot>
    )
}

export default BlockModal;
