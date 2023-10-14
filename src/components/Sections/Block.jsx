import React, { createElement, useEffect, useState, ReactDOM, Children } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { Button } from '@mui/material'
import ImgModal from './ImgModal'

const makeElement = (element, data) => {
  let a = `<div>${data}</div>`;
  switch (element) {
    case "h1":
      a = `<h1>${data}</h1>`
      break;
    case "p":
      a = `<p>${data}</p>`
      break;
    default:
      a = `<div>${data}</div>`
      break;
  }

  return a;
}


const Block = ({ buy, data, SectionData }) => {
  const [state, setState] = useState(false)
  const [mas, setMas] = useState({ ...data })
  const [modal, setModal] = useState({
    block:false,
  })
  const [img,setImg] = useState(false)
  return (
    <div className={`${s.block} ${buy ? 'bought' : 'not-bought'}`}>
      {
        !buy && (
          <div className={s.hover} >
            <img src={plus} className={s.img__plus} alt="Купить блок" onClick={() => {
              setModal({...modal,block:true})
            }} />
          </div>
        )
      }
      {
        buy && (
          <div className={s.block__content}>
            <div className={s.panel}>
              <div className={s.panel__option}>
                <Button variant='contained' onClick={() => {
                  setState(!state)
                }}>Добавить</Button>
                {state ? <div className={s.panel__menu}>
                  <div className={s.panel__menu__option}>
                    <div className={s.panel__menu__option}><p onClick={() => {
                      let newElement = { element: "h1", data: "Заголовок" };
                      setMas({ ...mas, elements: [...mas.elements, newElement] });
                    }}>Заголовок</p>
                    </div>
                  </div>
                  <div className={s.panel__menu__option}><p onClick={() => {
                    let newElement = { element: "p", data: "Параграф" };
                    setMas({ ...mas, elements: [...mas.elements, newElement] });
                  }}>Параграф</p></div>
                  <div className={s.panel__menu__option}>
                    <p onClick={()=>{
                      setImg(true)
                    }}>Фотография</p></div>
                </div> : null}
                {img?<ImgModal setImg = {setImg}/>:null}
              </div>
            </div>
            {
              mas.elements.map((item) => {
                let testData = makeElement(item.element, item.data)
                return <div {...item.attributes} dangerouslySetInnerHTML={{ __html: testData }} />
              })
            }
          </div>
        )
      }
      <div className={s.content__block}>

      </div>
      {
        modal.block && (
          <BlockModal data={SectionData} setModal={setModal} />
        )
      }
    </div>
  )
}

export default Block