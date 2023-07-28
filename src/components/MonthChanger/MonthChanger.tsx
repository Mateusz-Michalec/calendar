import React from "react";
import "./MonthChanger.scss";

const MonthChanger = ({ currentDate, setCurrentDate }) => {
  return (
    <div className="month-changer">
      <div className="month-changer__arrows">
        <div
          onClick={() => setCurrentDate((prev) => prev.month(prev.month() - 1))}
          className="month-changer__arrow-wrapper"
        >
          <span className="month-changer__arrow">&#8249;</span>
        </div>
        <div
          onClick={() => setCurrentDate((prev) => prev.month(prev.month() + 1))}
          className="month-changer__arrow-wrapper"
        >
          <span className="month-changer__arrow">&#8250;</span>
        </div>
      </div>
      <h1 className="month-changer__current-month">
        {currentDate.format("MMMM YYYY")}
      </h1>
    </div>
  );
};

export default MonthChanger;
