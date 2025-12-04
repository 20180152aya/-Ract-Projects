import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },
  reducers: {
    toggleLang: (state) => {
      state.lang = state.lang === "en" ? "ar" : "en";
    },
  },
});

export const { toggleLang } = languageSlice.actions;
export default languageSlice.reducer;
