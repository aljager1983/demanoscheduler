import React from "react";

const day0 = 0;
const lastDay = () => {
  return day0;
};
const TableData = () => {
  return (
    <tr>
      <td className="d1">{day0 + 1}</td>
      <td className="d2">{day0 + 2}</td>
      <td className="d3">{day0 + 3}</td>
      <td className="d4">{day0 + 4}</td>
      <td className="d5">{day0 + 5}</td>
      <td className="d6">{day0 + 6}</td>
      <td className="d7">{day0 + 7}</td>
    </tr>
  );
};

export default TableData;
export { lastDay };
