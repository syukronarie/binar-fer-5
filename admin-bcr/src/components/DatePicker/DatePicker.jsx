/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.styles.css";

export function DatePicker({ dateValue, setDate, label, dateFormat, name, testId, startDate, endDate, placeholder, disabled }) {
  const CustomInput = forwardRef(({ value, onClick, onChange }, ref) => (
    <div className="container">
      <label className="calendar-label" htmlFor="date">
        {label}
      </label>
      <input
        id="date"
        value={value}
        className="example-custom-input"
        onClick={onClick}
        onChange={onChange}
        ref={ref}
        name={name}
        data-testid={testId}
        placeholder={placeholder}
        disabled={disabled}
      />
      <FaRegCalendarAlt className="calendar-icon" alt="calendar-icon" />
    </div>
  ));

  return (
    <ReactDatePicker
      dateFormat={dateFormat}
      selected={dateValue}
      onChange={(date) => setDate(date)}
      customInput={<CustomInput />}
      todayButton="TODAY"
      selectsStart={Boolean(startDate)}
      selectsEnd={Boolean(endDate)}
      startDate={startDate}
      endDate={endDate}
      popperModifiers={[
        {
          name: "arrow",
          options: { padding: 100 },
        },
      ]}
    />
  );
}
