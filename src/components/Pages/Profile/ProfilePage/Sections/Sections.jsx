import React from 'react';
import s from './Sections.module.css';
import edit from '../../../../../img/edit.png'
const Sections = ({ colorMas }) => {
  const sectionsData = [
    {
      type: "full",
      data: [
        {
          title: "section name",
          isUsed: false
        },
        {
          title: "section name2",
          isUsed: false
        },
      ]
    },
    {
      type: "1/2"
    },
    {
      type: "1/3",
      data:[
        {
          title: "section name2",
          isUsed: false
        },
      ]
    },
    {
      type: "1/4"
    },
    {
      type: "1/5"
    },
    {
      type: "1/6"
    },
    {
      type: "1/7"
    },
    {
      type: "1/8"
    },
  ]

  return (
    <div className={s.sections__wrap}>
      <div className={s.section__panel}>
        <p>Использованные секции</p>
      </div>
      <div className={s.section__content}>
        {sectionsData.map((item, index) => (
          <div className={s.section__type} key={index}>
            <div className={s.title}>
              <h3>{item.type}</h3>
            </div>
            {item.data && item.data.map((dataItem, dataIndex) => (
              <div className={s.card__wrap} style={{backgroundColor: colorMas[index]}}>
                <div className={s.card} key={dataIndex}>
                  <div className={s.img__wrap}>
                    <img src={edit} alt="Редактировать секцию" />
                  </div>
                  <p>Название: {dataItem.title}</p>
                  <p>{dataItem.isUsed == false ? "Не использован" : "Использован"}</p>

                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sections;
