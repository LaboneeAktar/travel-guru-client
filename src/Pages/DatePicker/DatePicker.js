import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex justify-between">
      <div className="border border-gray-200 px-4 py-1 w-36 rounded-lg shadow-md">
        <h2 className=" py-1">From</h2>
        <DatePicker
          className="w-28"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="border border-gray-200 px-4 py-1 w-36 rounded-lg shadow-md">
        <h2 className="py-1">To</h2>
        <DatePicker
          className="w-28"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
};

export default DatePickerForm;
