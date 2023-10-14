import React from "react";
import s from "./Sections.module.css";
import Block from "./Block";

const Sections = ({ data }) => {


  const filteredMas = data.blocks.sort((a, b) => a.position - b.position)

  return (
    <div className={s.module}>
      <div className={`${s.container} ${s["section" + data.type]}`}>
        {Array.from({ length: data.type }, (item, index) => (
          <Block key={index} SectionData = {data} data={data.blocks[index]} buy={filteredMas.some((item) => item.position === index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
