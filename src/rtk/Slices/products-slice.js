import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
