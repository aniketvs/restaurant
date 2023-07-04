import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice"
import extraSlice from "./slices/extraSlice";
import priceSlice from "./slices/priceSlice";
export const store=configureStore({
    reducer:{
       cart:cartSlice,
       price:priceSlice,
       extra:extraSlice
    },
})