import React, { useEffect, useState } from 'react';
import s from './Sections.module.css';
import Cards from './Cards';
import { useSelector } from 'react-redux';

const Sections = ({ colorMas }) => {
  const { sections,count } = useSelector(state => state.sections);

  const initialData = [
    {
      type: "full",
      data: []
    },
    {
      type: "1/2",
      data: []
    },
    {
      type: "1/3",
      data: []
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
  ];

  const [data, setData] = useState(initialData);
  const [usedSections, setUsedSections] = useState(false);
  const [namedSections, setNamedSections] = useState(false);

  const sortMas = () => {
    const newData = initialData.map(item => ({
      ...item,
      data: sections.filter(sortItem => sortItem.type === item.type)
    }));
    setData(newData);
  };

  useEffect(() => {
    sortMas();
  }, [sections]);

  return (
    <div className={s.sections__wrap}>
      <p>Секций: {count}/20</p>
      <div className={s.section__panel}>
        <div className={s.option}>
          <label htmlFor="usedSections">
            <p>Использованные секции</p>
          </label>
          <input type="checkbox" id='usedSections' checked={usedSections} onChange={() => {
              setUsedSections(!usedSections);
            }}/>
        </div>
        <div className={s.option}>
          <label htmlFor="namedSections">
            <p>Секции с названиями</p>
          </label>
          <input type="checkbox" id='namedSections' checked={namedSections} onChange={() => {
              setNamedSections(!namedSections);
            }} />
        </div>
      </div>
      <div className={s.section__content}>
        {data.map((item, index) => {
          const filteredData = item.data.filter(dataItem => {
            if ((usedSections && !dataItem.isUsed) || (namedSections && dataItem.name.length === 0)) {
              return false;
            }
            return true;
          });

          if (filteredData.length > 0) {
            return (
              <div className={s.section__type} key={index}>
                <div className={s.title}>
                  <h3>{item.type}</h3>
                </div>
                {filteredData.map((dataItem, dataIndex) => (
                  <Cards key={dataIndex} colorMas={colorMas} dataItem={dataItem} data={data} />
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Sections;
