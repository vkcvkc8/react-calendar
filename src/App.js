import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dateRange, setDateRange] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => handleDateChange(new Date(e.target.value))}
        />
      </div>
      <div></div>
      <Calendar onChange={handleDateChange} value={selectedDate} />
    </div>
  );
}
