import { createSlice } from "@reduxjs/toolkit";
export const extraSlice=createSlice({
    name:"extra",
    initialState:[],
    reducers:{
       addextra:(state,action)=>{
        state.push(action.payload)
       }
    }
})

export const {addextra} = extraSlice.actions;

export default extraSlice.reducer;