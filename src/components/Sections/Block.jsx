import React, { useEffect, useState } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
import { useSelector } from 'react-redux'

const Block = ({buy,data}) => {
  const [hover, setHover] = useState(false)
  const [modal, setModal] = useState(false)
  const { blocks } = useSelector(state => state.sections)
  return (
    <>
      <div className={s.block} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
        {hover&&buy ? <div className={s.hover}>
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