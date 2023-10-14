import React, { createElement, useEffect, useState, ReactDOM, Children } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { useSelector } from 'react-redux'

const makeElement = (element, data) =>{
  console.log(element,data)
let a = `<div>${data}</div>`;
  switch (element){
    case "h1":
      a= `<h1>${data}</h1>`
      break;
    case "p":
      a= `<p>${data}</p>`
      break;
    default:
      a= `<div>${data}</div>`
      break;
    }

    return a;
  }
  

const Block = ({buy,data,SectionData}) => {
  const [hover, setHover] = useState(false)
  const [modal, setModal] = useState(false)
  const { blocks } = useSelector(state => state.sections)

  return(
    <div className={`${s.block} ${buy?'bought':'not-bought'}`}>
      {
        !buy &&(
          <div className={s.hover} >
            <img src={plus} className={s.img__plus} alt="Купить блок" onClick={() => {
              setModal(true)
            }} />
          </div>
        )
      }
      {
        buy &&(
          <div className={s.block__content}>
            {
              data.elements.map((item)=>{
              let data = makeElement(item.element,item.data)
                return <div {...item.attributes} dangerouslySetInnerHTML={{__html:data}}/>
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