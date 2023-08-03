import React, { useState } from "react";
import s from './BuySection.module.css'
import PortalModalRoot from "../Portals/PortalModalRoot";
import cross from "../../img/cross.png"
import ConfirmModal from "./ConfirmModal";

const SectionModal = ({ setSectionModal }) => {
    const sectionsData = [
        {
            type: "full",
            price: 100,
        },
        {
            type: "1/2",
            price: 80,
        },
        {
            type: "1/3",
            price: 60,
        },
        {
            type: "1/4",
            price: 50,
        },
        {
            type: "1/5",
            price: 40,
        },
        {
            type: "1/6",
            price: 30,
        },
        {
            type: "1/7",
            price: 25,
        },
        {
            type: "1/8",
            price: 20,
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
                    <div className={s.top}>Выберите тип секции</div>
                    <div className={s.mid}>
                        {sectionsData.map((item, index) => {
                            return (
                                <div key={index} className={`${s.section} ${index == 1 ? s.second : null}
                                ${index == 2 ? s.third : null}
                                ${index == 3 ? s.fourth : null}
                                ${index == 4 ? s.fifth : null}
                                ${index == 5 ? s.sixth : null}
                                ${index == 6 ? s.seventh : null}
                                ${index == 7 ? s.eighth : null}
                                `} onClick={()=>{
                                    setModal({active:true,item:item})
                                }}>
                                    <div className={`${s.block} ${s.special}`}></div>
                                    {Array.from({ length: index }).map((index) => (
                                        <div key={index} className={s.block}></div>
                                    ))}
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