"use client"
import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
    name: "lounchtable",
    initialState: {data:[],},
    reducers:{
        setLounchTableData: (state, action) =>{
            state.data = action.payload;
        },
        addRow: (state, action)=>{
            state.data.push(action.payload);
        },
        setEditItem: (state, action) =>{
            state.editItem = action.payload;
        },
        deleteRow: (state, action) =>{
            state.data = state.data.filter((item)=> item.id !== action.payload);
        }
    }
})

export const {setLounchTableData, addRow, setEditItem, deleteRow} = tableSlice.actions;
export default tableSlice.reducer;