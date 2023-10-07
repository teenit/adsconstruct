import React, { createElement, useEffect, useState } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { useSelector } from 'react-redux'

const Block = ({buy,data}) => {
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
                return createElement(item.element,item.attributes,item.data
                  )
                
              })
            }
          </div>
        )
      }
      <div className={s.content__block}>

      </div>
      {
        modal&&(
          <BlockModal setModal={setModal} />
        )
      }
    </div>
  )
  return (
    <>
      <div className={s.block} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
        {hover&&buy === false ? <div className={s.hover}>
          <img src={plus} alt="Купить блок" onClick={() => {
            setModal(true)
            console.log(blocks);
          }} />
        </div> : null}
      </div>
      {modal ? <BlockModal setModal={setModal} /> : null}
          
    </>

  )
}

export default Block