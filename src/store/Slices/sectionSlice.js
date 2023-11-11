import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [
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
                elements: []
            },
            ]
        },

    ]
}

const sectionSlice = createSlice({
    name: "sections",
    initialState,
    reducers: {
        setSection(state, action) {
            console.log(state.data, action.payload)
            const newData = [...state.data];
            const newBlocks = [...newData[2].blocks, action.payload];
            newData[2] = { ...newData[2], blocks: newBlocks };
            return { ...state, data: newData };
        }




    }
})

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer