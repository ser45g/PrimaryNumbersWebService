import { createSlice } from "@reduxjs/toolkit";
let initialState="light";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  initialState='dark';
}


export const appColorModeSlice=createSlice({
  name:'appColorMode',
  initialState,
  reducers:{
    setAppColorMode: (state,action)=>{
      state.appColorMode= action.payload;
    }
  }
});

export const {setAppColorMode} = appColorModeSlice.actions;
export default appColorModeSlice.reducer;