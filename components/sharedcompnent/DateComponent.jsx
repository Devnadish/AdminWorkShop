import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";// Assuming import path

function DateComponent({selectedDate,  setSelectedDate}) {

  const minDate = new Date();
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd-MM-yyyy"
      minDate={minDate}
      className="w-28 border border-border rounded shadow px-3 py-1 focus:outline-none "
      // className={styles.container} // Apply custom styles if needed
      // Other DatePicker props as needed
    />
  );
}

export default DateComponent;
