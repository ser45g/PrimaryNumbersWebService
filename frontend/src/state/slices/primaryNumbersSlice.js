import { createSlice } from "@reduxjs/toolkit";
const initialState={
  primaryNumbersObject:{
    primaryNumbers:[],
    total:0,
    start:2,
    end:1000
  }
};

export const primaryNumbersSlice=createSlice({
  name:'primaryNumbers',
  initialState,
  reducers:{
    setPrimaryNumbers: (state,action)=>{
      state.primaryNumbersObject= action.payload;
    }
  }
});

export const {setPrimaryNumbers} = primaryNumbersSlice.actions;
export default primaryNumbersSlice.reducer;