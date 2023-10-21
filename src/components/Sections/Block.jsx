import React, { createElement, useEffect, useState } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { Button } from '@mui/material'
import ImgModal from './ImgModal'
import TextEditor from '../Pages/Police/TextEditor'
import { Close, Delete, ModeEdit } from '@mui/icons-material'

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
  const [state, setState] = useState({
    add: false,
    edit: false,
    img: false,
    block:false
  })
  const [mas, setMas] = useState({ ...data })
  function deleteElem(index) {
    const newMas = { ...mas };
    delete newMas.elements[index];
    setMas(newMas);
  }

  const [editMenu, setEditMenu] = useState(false)
  const [edit, setEdit] = useState(false)
  const [elemIndex, setElemIndex] = useState(null)

  return (
    <div className={`${s.block} ${buy ? 'bought' : 'not-bought'}`}>
      {
        !buy && (
          <div className={s.hover} >
            <img src={plus} className={s.img__plus} alt="Купить блок" onClick={() => {
              setState({ ...state, block: true })
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
                  setState({ ...state, add: !state.add })
                }}>Добавить</Button>

                {state.add ? <div className={s.panel__menu}>
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
                    <p onClick={() => {
                      setState({ ...state, img: !state.img })
                    }}>Фотография</p></div>
                </div> : null}
                {state.img ? <ImgModal close={() => { setState({ ...state, img: !state.img }) }} /> : null}
              </div>
            </div>

            {
              mas.elements.map((item, index) => {
                let testData = makeElement(item.element, item.data)
                return <div className={s.element__wrap}>
                  <div contentEditable={edit && elemIndex == index} className={`${s.element} ${(editMenu || edit) && elemIndex !== index ? s.selected : ''}`} {...item.attributes} dangerouslySetInnerHTML={{ __html: testData }} onClick={() => {
                    if(edit){
                      setEditMenu(false)
                    }else{
                      setEditMenu(true)
                    }
                    setElemIndex(index)
                  }} />
                  {editMenu && elemIndex == index ? <div className={s.edit__menu}>
                    <ModeEdit className={s.edit__icon}  onClick={() => {
                      setEdit(!edit)
                      setEditMenu(false)
                    }} />
                    <Delete className={s.edit__icon}  onClick={() => {
                      deleteElem(elemIndex)
                      setEditMenu(false)
                    }} />
                    <Close className={s.edit__icon}  onClick={() => {
                      setEditMenu(false)
                    }} />
                  </div> : null}
                  {edit && elemIndex == index ? <TextEditor setEdit={setEdit} /> : null}

                </div>
              })
            }

          </div>

        )
      }
      <div className={s.content__block}>

      </div>
      {
        state.block && (
          <BlockModal data={SectionData} close={()=>{setState({...state,block:false})}} />
        )
      }
    </div>
  )
}

export default Block