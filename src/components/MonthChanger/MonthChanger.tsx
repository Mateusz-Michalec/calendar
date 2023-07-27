import React from "react";
import "./MonthChanger.scss";
import dayjs from "dayjs";

const MonthChanger = ({ currentDate, setCurrentDate }) => {
  return (
    <div className="month-changer">
      <div className="month-changer__arrows">
        <span className="month-changer__arrow">&#8249;</span>
        <span className="month-changer__arrow">&#8250;</span>
      </div>
      <h1 className="month-changer__current-month">
        {dayjs(
          `${currentDate.year}-${currentDate.month}-${currentDate.day}`
        ).format("MMMM YYYY")}
      </h1>
    </div>
  );
};

export default MonthChanger;
