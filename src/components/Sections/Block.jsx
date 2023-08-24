import React, { useEffect, useState } from 'react'
import s from './Block.module.css'
import plus from '../../img/add.png'
import BlockModal from './BlockModal'
const Block = ({ mas}) => {
  const [hover, setHover] = useState(false)
  const [modal, setModal] = useState(false)
  return (
    <>
      <div className={s.block} onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
        {hover ? <div className={s.hover}>
          <img src={plus} alt="Купить блок" onClick={() => {
            setModal(true)
          }} />
        </div> : null}
      </div>
      {modal ? <BlockModal mas={mas} setModal={setModal} /> : null}

    </>

  )
}

export default Block