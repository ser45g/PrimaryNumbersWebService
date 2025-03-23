import { createSlice } from "@reduxjs/toolkit";
const initialState={primaryNumbers:[]};

export const primaryNumbersSlice=createSlice({
  name:'primaryNumbers',
  initialState,
  reducers:{
    setPrimaryNumbers: (state,action)=>{
      state.primaryNumbers= action.payload;
    }
  }
});

export const {setPrimaryNumbers} = primaryNumbersSlice.actions;
export default primaryNumbersSlice.reducer;