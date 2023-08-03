import React, { useState } from "react";
import s from './style.module.css'
import { Input, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import PortalSearchResult from "../../Portals/PortalSearchResult";


const words = [{text:"weofpjwe"},{text:"fewwewf"},{text:"ujjyuyuj"},{text:"434"},{text:"0oyo0t"},{text:"agyud"},{text:"regererg"},{text:"ekrgkepko"},]


const SearchMain = () =>{

    const [state,setState] = useState({
        active:false,
        value:'',
        showResult:false,
        searchResult:[]
    })
    const getResult = (value)=>{
        let masRes = [];
        console.log(value)
        words.forEach((item)=>{
            let text = item.text;
            console.log(text.search(value))
            if(text.search(value) !== -1 && value !== ''){
                masRes.push(item);
            }
        })

        if(masRes.length === 0){
            setState({...state,showResult:false,value:value})
        }else{
            setState({...state,showResult:true,searchResult:masRes,value:value})
        }
    }
    const SearchResult = ({items})=>{
        return(
            <div className={s.result}>
                {
                    items.map((item,index)=>{
                        return(
                            <p key={index}>
                                {item.text}
                            </p>
                        )
                    })
                }
            </div>
        )
    }

    return(
        <div>
            <input variant = {'standard'} value={state.value} className={s.header__input} placeholder="Введите ключевое слово" onChange={(e) => {
                        getResult(e.target.value)
                    }}/>
            <Search className={s.input__icon} />
            {
                state.showResult ? 
            
            <PortalSearchResult>
                <SearchResult items = {state.searchResult}/>
            </PortalSearchResult>:null
            }
        </div>
    )
}

export default SearchMain;