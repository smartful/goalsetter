import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: () => {},
});

export const { reset } = goalsSlice.actions;
export default goalsSlice.reducer;
