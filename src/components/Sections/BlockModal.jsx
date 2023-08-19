import React, { useState } from 'react'
import PortalModalRoot from '../Portals/PortalModalRoot'
import s from './Block.module.css'
import { Button } from '@mui/material'
import ConfirmModal from './ConfirmModal'
import { useSelector } from 'react-redux'

const BlockModal = ({ setModal, mas }) => {
    const [active, setActive] = useState(null);
    const {usedSections} = useSelector(state => state.sections)
    const [confirmModal, setConfirmModal] = useState(false);
    const [blockMas, setBlockMas] = useState(usedSections)
    const changeUsedSections = () => {
        const newMas = [...blockMas]
        newMas.push(active)
        setBlockMas(newMas)
    }
    return (
        <PortalModalRoot>
            <div className={s.modal__inner}>
                <div className={s.title}>
                    <h3>Выберите блок из секции</h3>
                </div>
                <div className={`${s.section}
                    ${mas.length === 2 ? s.second : null}
                    ${mas.length === 3 ? s.third : null}
                    ${mas.length === 4 ? s.fourth : null}
                    ${mas.length === 5 ? s.fifth : null}
                    ${mas.length === 6 ? s.sixth : null}
                    ${mas.length === 7 ? s.seventh : null}
                    ${mas.length === 8 ? s.eighth : null}
                `}>
                    {mas.map((item, index) => (
                        <div key={index} className={`${s.mini__block} ${active === index ? s.active : null}`} onClick={() => {
                            setActive(index)
                            console.log(blockMas);
                        }}
                        ></div>
                    ))}
                </div>
                <Button variant='contained' onClick={() => {
                    setConfirmModal(true)
                }}>выбрать блок</Button>
                {confirmModal ? <ConfirmModal usedSections={blockMas} changeUsedSections ={changeUsedSections} setBlockModal={() => { setModal(false) }} setModal={() => { setConfirmModal(false) }} index={active} /> : null}
                <Button variant='contained' className={s.red__button} onClick={() => {
                    setModal(false)
                }}>отмена</Button>
            </div>
        </PortalModalRoot>
    )
}

export default BlockModal;
