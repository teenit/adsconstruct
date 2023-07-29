import React, { useState } from "react";
import s from './frontPage.module.css'
import PortalModalRoot from "../../Portals/PortalModalRoot";
import cross from "../../../img/cross.png"
import SectionThree from "../../Sections/SectionThree/SectionThree";
import ConfirmModal from "./ConfirmModal";

const SectionModal = ({ setSectionModal }) => {
    const sectionsData = [
        {
            type: "full",
            price: 100,
            isModal: false
        },
        {
            type: "1/2",
            price: 80,
            isModal: false
        },
        {
            type: "1/3",
            price: 60,
            isModal: false
        },
        {
            type: "1/4",
            price: 50,
            isModal: false
        },
        {
            type: "1/5",
            price: 40,
            isModal: false
        },
        {
            type: "1/6",
            price: 30,
            isModal: false
        },
        {
            type: "1/7",
            price: 25,
            isModal: false
        },
        {
            type: "1/8",
            price: 20,
            isModal: false
        }
    ]
    const [modal, setModal] = useState({ active: false, item: null })
    return (
        <PortalModalRoot>
            <div className={s.t0}>

                <div className={s.form}>
                    <div className={s.close} onClick={() => { setSectionModal(false) }}>
                        <img src={cross} alt="Закрыть окно" />
                    </div>
                    <div className={s.top}>Выберите тип слота</div>
                    <div className={s.mid}>
                        {sectionsData.map((item, index) => {
                            return (
                                <div className={s.full}>
                                    <div className={`${s.section} ${s.full__section}`} onClick={() => {
                                        setModal({ active: true, item: item })
                                    }}>
                                    </div>

                                    <p>type: {item.type} price:{item.price}</p>

                                </div>

                            )

                        })}

                    </div>
                    {
                                        modal.active ? <ConfirmModal setSectionModal={setSectionModal} itemSection={modal.item} setModal={(active, item) => { setModal({ active: active, item: item }) }} /> : null
                                    }
                </div>
            </div>

        </PortalModalRoot>
    )
}
export default SectionModal