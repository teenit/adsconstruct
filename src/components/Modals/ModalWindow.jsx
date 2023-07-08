import React from "react";
import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./ModalWindow.module.css";



const modal = document.querySelector('#root-modal');


export class ModalWindow extends Component {
    render()
    {
     return createPortal(
         <div className={s.modal__wrap}>
                {this.props.children}      
         </div>,
         modal
     )
    } 
  }
  export default ModalWindow;