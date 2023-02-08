/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DatePicker, Radio, message } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  STEPS,
  selectStepPayment,
  setDateRange,
  setStep,
  setMethod,
  setInvoice,
  selectPayloadPayment,
  selectCarData,
} from "../store/features/rentSlice";
import APIOrder from "../apis/APIOrder";

const convertDate = (dates) => {
  const startDate = dates[0].format("DD-MM-YYYY");
  const endDate = dates[1].format("DD-MM-YYYY");
  return { startDate, endDate };
};

function PaymentPage() {
  const step = useSelector(selectStepPayment);
  const dispatch = useDispatch();
  const { method, invoice, dateRange } = useSelector(selectPayloadPayment);
  const carData = useSelector(selectCarData);

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

  const propsUpload = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  useEffect(() => {
    console.log({ method, invoice, dateRange });
    // { method, invoice, dateRange }
  }, [method, invoice, dateRange]);

  const handleCreateOrder = (carId, dates) => {
    const { startDate, endDate } = convertDate(dates);
    APIOrder.createOrder(startDate, endDate, carId)
      .then((res) => {
        console.log({ res });
        dispatch(setStep(STEPS.CONFIRM_PAYMENT));
      })
      .catch((err) => {
        console.log(err);
        message.error(JSON.stringify(err));
      });
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
          <button
            type="button"
            onClick={() => {
              dispatch(setStep(STEPS.SELECT_METHOD));
            }}
          >
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
          <button
            type="button"
            onClick={() => {
              handleCreateOrder(carData?.id, dateRange);
            }}
          >
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
