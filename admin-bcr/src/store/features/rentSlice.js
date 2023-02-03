/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const STEPS = {
  SELECT_DATE: "SELECT_DATE",
  SELECT_METHOD: "SELECT_METHOD",
  CONFIRM_PAYMENT: "CONFIRM_PAYMENT",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
};

const initialState = {
  step: STEPS.SELECT_DATE,
  payload: {
    method: "",
    invoice: null,
    dateRange: null,
  },
  carData: null,
};

const paymentSlice = createSlice({
  name: "rent",
  initialState,
  reducers: {
    setCarData: (state, action) => {
      state.carData = action.payload;
    },
    setDateRange: (state, action) => {
      state.payload.dateRange = action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setMethod: (state, action) => {
      state.payload.method = action.payload;
    },
    setInvoice: (state, action) => {
      state.payload.invoice = action.payload;
    },
  },
});

export const { setCarData, setDateRange, setStep, setMethod, setInvoice } = paymentSlice.actions;
export default paymentSlice.reducer;

export const selectStepPayment = (state) => state.rent.step;
export const selectCarData = (state) => state.rent.carData;
