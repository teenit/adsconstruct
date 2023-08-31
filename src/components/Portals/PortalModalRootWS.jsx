import React, { Component} from "react";
import { createPortal } from "react-dom";
import s from "./ws.module.css"

export class PortalModalRootWS extends Component{
    el = document.createElement('div')
    
    componentDidMount(){
        this.el.className = s.wrap;
        document.body.appendChild(this.el)
    }
    componentWillUnmount(){
        document.body.removeChild(this.el)
    }
    
    render(){
           return (
                    createPortal(
                        <div>  
                            {this.props.children}
                        </div>, 
                        this.el)  
           )
    }  
}

export default PortalModalRootWS;