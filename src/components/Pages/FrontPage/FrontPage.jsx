import React, { useState } from "react";
import s from "./frontPage.module.css";

import Sections from '../../Sections/Sections'

const FrontPage = () => {
    const mas = [
        {
            userName: "name",
            userNickname: "id",
            buyTime: "12.09.2023 13:44",
            property: {
                defend: true,
                defendTo: "13.09.2023 19:44",
            },
            id: "",
            type: 8,
            position: 1,
            blocks: [{
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 7,
                idSection: "",
                elements: [{
                    position: 1,
                    tag: "h1",
                    data: [{
                        isTag: true,
                        tag: "span",
                        attributes: {
                            style: {},
                            id: "",
                        },
                        data: "span text"
                    }, {
                        isTag: false,
                        data: "text"
                    }],
                    attributes: {
                        style: { color: "gray" },
                        id: "tag-1"
                    },
                }]
            }, {
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 2,
                idSection: ""
            },
            ]
        },
        {
            userName: "name",
            userNickname: "id",
            buyTime: "12.09.2023 13:44",
            property: {
                defend: true,
                defendTo: "13.09.2023 19:44",
            },
            id: "",
            type: 2,
            position: 2,
            blocks: [{
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 1,
                idSection: ""
            }
            ]
        },
        {
            userName: "name",
            userNickname: "id",
            buyTime: "12.09.2023 13:44",
            property: {
                defend: true,
                defendTo: "13.09.2023 19:44",
            },
            id: "8",
            type: 4,
            position: 8,
            blocks: [{
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, 
                position: 0,
                idSection: "",
                elements: [{
                    element:"h1",
                    data:"uhefbwe fw efiwe fiwe",
                    id:"",
                    idBlock:"",
                    position:0,
                    attributes:{
                        style:{color:"red"},
                        width:"100%"
                    }
                },
                {
                    element:"p",
                    data:"uhefbwe fw efiwe fiwe <h2>BIG TEXT</h2> nekjfw fwefj wehjf hew",
                    id:"",
                    idBlock:"",
                    position:0,
                    attributes:{
                        style:{color:"green",fontSize:"10px"},
                        width:"100%"
                    }
                }]
            }, {
                userName: "",
                userNickname: "",
                id: "",
                buyTime: "12.09.2023 13:44",
                property: {
                    defend: true,
                    defendTo: "13.09.2023 19:44",
                }, position: 1,
                idSection: "",
                elements:[]
            },
            ]
        },

    ]
    return (
        <div className={s.wrap}>
            <Sections data={mas[2]} />
           
            {mas[0].blocks[0].elements.map((item, index) => {
                const styles = Object.keys(item.attributes.style).map(key => `${key}:${item.attributes[key]}`)
                const attributes = Object.keys(item.attributes).map(key => `${key}=${item.attributes[key]}`)

                return (
                    `<${item.tag} ${attributes}">${item.data.map((dataItem, dataIndex) => {
                        if (dataItem.isTag) {
                            return `<${dataItem.tag}>${dataItem.data}</${dataItem.tag}>`
                        } else {
                            return dataItem.data
                        }
                    }).join('')}</${item.tag}>`
                );
            })}

            {/* {mas[0].blocks[0].elements.map((item, index) => {
                return (
                    `<${item.tag} ${attributes=item.attributes.style}>${item.data.map((dataItem, dataIndex) => {
                        if (dataItem.isTag) {
                            return `<${dataItem.tag}>${dataItem.data}</${dataItem.tag}>`
                        } else {
                            return dataItem.data
                        }
                    }).join('')}</${item.tag}>`
                )
            })} */}

        </div>




    )
}
export default FrontPage;