import { createSlice } from "@reduxjs/toolkit";



export const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
       add:(state,action)=>{
        
        state.push(action.payload);
        console.warn(action.payload);
        
       },
       increment:(state,action)=>{
        
          state.map((item)=>{
            
            if(item.item.name===action.payload){
               
               item.count=item.count+1;
               console.warn(item.count)
               return;
            }
        })
       },
       decrement:(state,action)=>{
        state.map((item)=>{
            if(item.item.name===action.payload){
               
                item.count=item.count-1;
                console.warn(item.count)
                return;
             }
      })
     },
       remove:(state,action)=>{
     
        return state.filter((item)=>item._id!=action.payload);
       },
    }
})

export const {add,remove,increment,decrement} = cartSlice.actions;

export default cartSlice.reducer;