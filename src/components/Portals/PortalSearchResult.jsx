import React, { Component} from "react";
import { createPortal } from "react-dom";
import s from "./style.module.css"

export class PortalSearchResult extends Component{
    el = document.createElement('div')
    
    componentDidMount(){
        document.body.appendChild(this.el)
    }
    componentWillUnmount(){
        document.body.removeChild(this.el)
    }
    
    render(){
           return (
                    createPortal( this.props.children,this.el)  
           )
    }  
}

export default PortalSearchResult;