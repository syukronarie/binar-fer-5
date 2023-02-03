/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import dayjs from "dayjs";
import { Button, DatePicker, Radio, Upload } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { STEPS, selectStepPayment, setDateRange, setStep, setMethod, setInvoice } from "../store/features/rentSlice";

function PaymentPage() {
  const step = useSelector(selectStepPayment);
  const dispatch = useDispatch();

  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  React.useEffect(() => {
    return () => {
      if (step !== STEPS.CONFIRM_PAYMENT && !isPaymentSuccess) {
        dispatch(setStep(STEPS.SELECT_DATE));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf("day");
  };

  return (
    <div>
      <h1>Payment Page</h1>
      {step === STEPS.SELECT_DATE && (
        <div>
          <h1>Select Date</h1>
          <DatePicker.RangePicker
            disabledDate={disabledDate}
            onChange={(date) => {
              dispatch(setDateRange(date));
            }}
          />
          <button type="button" onClick={() => dispatch(setStep(STEPS.SELECT_METHOD))}>
            Lanjut Pembayaran
          </button>
        </div>
      )}
      {step === STEPS.SELECT_METHOD && (
        <div>
          <h1>Select Payment Method</h1>
          <Radio.Group onChange={(value) => dispatch(setMethod(value.target.value))}>
            <Radio value="bca">BCA</Radio>
            <Radio value="bni">BNI</Radio>
            <Radio value="mandiri">Mandiri</Radio>
          </Radio.Group>
          <button type="button" onClick={() => dispatch(setStep(STEPS.CONFIRM_PAYMENT))}>
            Select Payment Method
          </button>
        </div>
      )}
      {step === STEPS.CONFIRM_PAYMENT && (
        <div>
          <h1>Confirm Payment</h1>
          <h2>Upload bukti pembayaran</h2>
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.files);
              dispatch(setInvoice(e.target.files[0]));
            }}
          />
          <button
            type="button"
            onClick={() => {
              dispatch(setStep(STEPS.PAYMENT_SUCCESS));
              setIsPaymentSuccess(true);
            }}
          >
            Confirm Payment
          </button>
        </div>
      )}
      {step === STEPS.PAYMENT_SUCCESS && (
        <div>
          <h1>Payment Success</h1>
          <Link to="/">Back to Home</Link>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
