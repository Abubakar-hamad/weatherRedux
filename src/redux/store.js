import { configureStore } from "@reduxjs/toolkit";
import wethReducer from "./slice/weatherSlice";

export const store = configureStore({
    reducer:{
        weather : wethReducer
    }
})

