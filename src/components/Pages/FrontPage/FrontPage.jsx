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
                elements: []
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
           
            

        </div>




    )
}
export default FrontPage;