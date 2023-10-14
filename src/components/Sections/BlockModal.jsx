import React, { useState } from 'react'
import PortalModalRoot from '../Portals/PortalModalRoot'
import s from './Block.module.css'
import { Button } from '@mui/material'
import ConfirmModal from './ConfirmModal'
import { useSelector } from 'react-redux'

const BlockModal = ({ setModal,data}) => {
    const [active, setActive] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const { blocks } = useSelector(state => state.sections)


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
                        <div key={index} className={`${s.mini__block} ${active === index ? s.active : null}`} onClick={() => {
                            setActive(index)
                        }}
                        ></div>
                    ))}
                </div>
                <Button variant='contained' onClick={() => {
                    setConfirmModal(true)
                }}>выбрать блок</Button>
                {confirmModal ? <ConfirmModal setBlockModal={() => { setModal(false) }} setModal={() => { setConfirmModal(false) }} activeIndex={active}  /> : null}
                <Button variant='contained' className={s.red__button} onClick={() => {
                    setModal(false)
                }}>отмена</Button>
            </div>
        </PortalModalRoot>
    )
}

export default BlockModal;
