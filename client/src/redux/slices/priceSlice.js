import { createSlice } from "@reduxjs/toolkit";



export const priceSlice=createSlice({
    name:"price",
    initialState:[],
    reducers:{
       addprice:(state,action)=>{
        console.warn(action.payload);
        state.push(action.payload);
       },
       popprice:(state,action)=>{
        state.pop();
       },
       removeprice:(state,action)=>{
        return state.filter((item)=>item!=action.payload);
       }
    }
})

export const {addprice,popprice,removeprice} = priceSlice.actions;

export default priceSlice.reducer;