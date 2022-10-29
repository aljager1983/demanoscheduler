import React from "react";
import TableData from "./td";
// import { lastDay } from "./td";

const MyCalendar = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const numMonth = new Date().getMonth();
  const getMonth = month[numMonth];

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Month of {getMonth}</h1>
      <table>
        <tbody>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>

          <TableData className="wk1" />
          <TableData className="wk2" />
          <TableData className="wk3" />
          <TableData className="wk4" />
          <TableData className="wk5" />
        </tbody>
      </table>
    </div>
  );
};

export default MyCalendar;
