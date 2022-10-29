import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MyCalendar from "./Calendar";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <MyCalendar />
    </div>
  );
}

export default App;
