import React, { useState } from 'react'
import EditSection from './EditSection';
import edit from '../../../../../img/edit.png'
import s from './Sections.module.css';


const Cards = ({ dataItem, dataIndex, colorMas, setData, data }) => {
    const [modal, setModal] = useState(false)
    return (
        <div className={s.card__wrap} key={dataIndex} style={{ backgroundColor: colorMas[dataIndex] }}>
            <div className={s.card}>
                <div className={s.img__wrap} onClick={() => {
                    setModal(true);
                }}>
                    <img src={edit} alt="Редактировать секцию" />
                </div>
                <p>{dataItem.name.length > 0 ? "Название: " + dataItem.name : "Без названия"}</p>
                <p>Статус: {dataItem.isUsed === false ? "Не использован" : "Использован"}</p>
                {modal === true ? <EditSection key={dataIndex} data={data} setData={setData} dataItem={dataItem} setModal={setModal} /> : null}
            </div>
        </div>
    )


}

export default Cards
