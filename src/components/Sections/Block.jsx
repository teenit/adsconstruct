import React, { createElement, useEffect, useState } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { Button } from '@mui/material'
import ImgModal from './ImgModal'
import TextEditor from '../Pages/Police/TextEditor'

const makeElement = (element, data,attributes) => {
  let a = `<div>${data}</div>`;
  switch (element) {
    case "h1":
      a = `<h1>${data}</h1>`
      break;
    case "p":
      a = `<p>${data}</p>`
      break;
    case "img":
      a = `<img src=${attributes}></img>`
      break;
    default:
      a = `<p>${data}</p>`
      break;
  }
  return a;
}

const Block = ({ buy, data, SectionData,blockIndex }) => {

  const [active, setActive] = useState(blockIndex);
  const [selectedFile, setSelectedFile] = useState(null);
  const [state, setState] = useState({
    add: false,
    edit: false,
    img: false,
    block: false
  })
  const [mas, setMas] = useState({ ...data })
  function deleteElem(index) {
    const newMas = { ...mas };
    delete newMas.elements[index];
    setMas(newMas);
  }

  const [edit, setEdit] = useState(false)
  const [elemIndex, setElemIndex] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleFileChange = (e) => {
      const file = e.target.files[0]
      if (file) {
          const url = URL.createObjectURL(file)
          setSelectedFile(url);
          setPreviewUrl(url);
      }
  };
  console.log(mas);
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
                      setState({ ...state, add: !state.add })
                    }}>Заголовок</p>
                    </div>
                  </div>
                  <div className={s.panel__menu__option}><p onClick={() => {
                    let newElement = { element: "p", data: "Параграф" };
                    setMas({ ...mas, elements: [...mas.elements, newElement] });
                    setState({ ...state, add: !state.add })
                  }}>Параграф</p></div>
                  <div className={s.panel__menu__option}>
                    <p onClick={()=>{setState({...state,img:true})}}>Фотография</p></div>
                </div> : null}
                {/* {state.img ? <ImgModal handleFileChange={handleFileChange} previewUrl={previewUrl} close={() => { setState({ ...state, img: !state.img, add:false }); }} /> : null} */}
              </div>
            </div>

            {
              mas.elements.map((item, index) => {
                let testData = makeElement(item.element, item.data)
                return <div className={s.element__wrap}>
                  <div contentEditable={edit && elemIndex == index} className={`${s.element} ${elemIndex !== index && elemIndex !== null ? s.selected : ''}`} {...item.attributes} dangerouslySetInnerHTML={{ __html: testData }} onClick={() => {
                    if (elemIndex == index) {
                      setElemIndex(null)
                    } else {
                      setElemIndex(index)
                    }
                    setEdit(true)
                  }} />

                  {edit && elemIndex == index ? <TextEditor setElemIndex={setElemIndex} deleteElem={deleteElem} elemIndex={elemIndex} setEdit={setEdit} /> : null}

                </div>
              })
            }

          </div>

        )
      }


      {
        state.block && (
          <BlockModal buy={buy} setActive={setActive} active={active} data={SectionData} close={() => { setState({ ...state, block: false }) }} />
        )
      }
    </div>
  )
}

export default Block