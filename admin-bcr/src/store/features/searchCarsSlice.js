/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APICar from "../../apis/APICar";

export const fetchSearchCars = createAsyncThunk("fetch/searchCars", async (params) => {
  try {
    const result = await APICar.searchCars({ params });
    return result;
  } catch (error) {
    throw new Error(error);
  }
});

const initialState = {
  payload: {},
  data: null,
  status: "idle",
};

const searchCarsSlice = createSlice({
  name: "searchCars",
  initialState,
  reducers: {
    setPayload: (state, { payload }) => {
      state.payload = { ...state.payload, payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchCars.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchSearchCars.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(fetchSearchCars.pending, (state, action) => {
      state.error = action.payload;
      state.status = "loading";
    });
  },
});

export const { setPayload } = searchCarsSlice.actions;
export default searchCarsSlice.reducer;
export const selectSearchCars = (state) => state.searchCars;
export const searchPayloadSearchCars = (state) => state.searchCars.payload;
