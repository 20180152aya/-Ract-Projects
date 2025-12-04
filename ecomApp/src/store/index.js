import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/counter"; 
import themaReducer from "./slice/them";
import languageSlice from "./slice/languageSlice"


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    thema: themaReducer,
    language:languageSlice
  }
});

export default store;