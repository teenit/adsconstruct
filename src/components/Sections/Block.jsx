import React, { createElement, useEffect, useState, ReactDOM } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { useSelector } from 'react-redux'

const Block = ({buy,data,SectionData}) => {
  const [hover, setHover] = useState(false)
  const [modal, setModal] = useState(false)
  const { blocks } = useSelector(state => state.sections)
  console.log(data)
  return(
    <div className={`${s.block} ${buy?'bought':'not-bought'}`}>
      {
        !buy &&(
          <div className={s.hover}>
            <img src={plus} className={s.img__plus} alt="Купить блок" onClick={() => {
              setModal(true)
              console.log(blocks);
            }} />
          </div>
        )
      }
      {
        buy &&(
          <div className={s.block__content}>
            {
              data.elements.map((item)=>{
                
                return createElement(item.element,item.attributes,item.data)
                
              })
            }
          </div>
        )
      }
      <div className={s.content__block}>

      </div>
      {
        modal&&(
          <BlockModal data = {SectionData} setModal={setModal} />
        )
      }
    </div>
  )
}

export default Block