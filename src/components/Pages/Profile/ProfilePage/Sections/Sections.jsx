import React, { useState } from 'react';
import s from './Sections.module.css';
import edit from '../../../../../img/edit.png'
import EditSection from './EditSection';

const Sections = ({ colorMas }) => {
  const [modal, setModal] = useState(false)
  const [sectionsData, setSectionsData] = useState([
    {
      type: "full",
      data: [
        {
          title: "",
          isUsed: true
        },
        {
          title: "section name2",
          isUsed: false
        },
      ]
    },
    {
      type: "1/2",
      data: []
    },
    {
      type: "1/3",
      data: [
        {
          title: "j",
          isUsed: false
        },
      ]
    },
    {
      type: "1/4",
      data: []
    },
    {
      type: "1/5",
      data: []
    },
    {
      type: "1/6",
      data: []
    },
    {
      type: "1/7",
      data: []
    },
    {
      type: "1/8",
      data: []
    },
  ])
  const [usedSections, setUsedSections] = useState(false)
  const [namedSections, setNamedSections] = useState(false)
  return (
    <div className={s.sections__wrap}>
      <div className={s.section__panel}>
        <div className={s.option} onClick={() => {
          setUsedSections(!usedSections)
        }}>
          <label htmlFor="usedSections">
            <p>Использованные секции</p>
          </label>
          <input type="checkbox" id='usedSections' value={usedSections} />
        </div>
        <div className={s.option}  onClick={() => {
          setNamedSections(!namedSections)
        }}>
          <label htmlFor="namedSections" value={namedSections}>
            <p>Секции с названиями</p>
          </label>
          <input type="checkbox" id='namedSections' />
        </div>
      </div>
      <div className={s.section__content}>
        {sectionsData.map((item, index) => (
          item.data.length > 0 && (
            <div className={s.section__type} key={index}>
              <div className={s.title}>
                <h3>{item.type}</h3>
              </div>
              {item.data.map((dataItem, dataIndex) => {
                if (usedSections === true) {
                  return dataItem.isUsed == true && (
                    <div className={s.card__wrap} key={dataIndex} style={{ backgroundColor: colorMas[index] }}>
                      <div className={s.card}>
                        <div className={s.img__wrap} onClick={() => {
                          setModal(true);
                        }}>
                          <img src={edit} alt="Редактировать секцию" />
                        </div>
                        <p>{dataItem.title.length>0?"Название: "+dataItem.title:"Без названия"}</p>
                        <p>Статус: {dataItem.isUsed === false ? "Не использован" : "Использован"}</p>
                        {modal === true ? <EditSection key={index} setSectionsData={setSectionsData} dataItem={dataItem} item={item} setModal={setModal} /> : null}
                      </div>
                    </div>

                  )
                }
                else if (namedSections==true) {
                  return dataItem.title.length >0 && (
                    <div className={s.card__wrap} key={dataIndex} style={{ backgroundColor: colorMas[index] }}>
                      <div className={s.card}>
                        <div className={s.img__wrap} onClick={() => {
                          setModal(true);
                        }}>
                          <img src={edit} alt="Редактировать секцию" />
                        </div>
                        <p>{dataItem.title.length>0?"Название: "+dataItem.title:"Без названия"}</p>
                        <p>Статус: {dataItem.isUsed === false ? "Не использован" : "Использован"}</p>
                        {modal === true ? <EditSection key={index} setSectionsData={setSectionsData} dataItem={dataItem} item={item} setModal={setModal} /> : null}
                      </div>
                    </div>

                  )
                }
                else {
                  return (
                    <div className={s.card__wrap} key={dataIndex} style={{ backgroundColor: colorMas[index] }}>
                      <div className={s.card}>
                        <div className={s.img__wrap} onClick={() => {
                          setModal(true);
                        }}>
                          <img src={edit} alt="Редактировать секцию" />
                        </div>
                        <p>{dataItem.title.length>0?"Название: "+dataItem.title:"Без названия"}</p>
                        <p>Статус: {dataItem.isUsed === false ? "Не использован" : "Использован"}</p>
                        {modal === true ? <EditSection key={index} setSectionsData={setSectionsData} dataItem={dataItem} item={item} setModal={setModal} /> : null}
                      </div>
                    </div>
                  );
                }
              })}

            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default Sections;
