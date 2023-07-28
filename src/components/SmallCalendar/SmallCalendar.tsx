import React, { useState } from "react";
import { generateDate, daysOfWeek } from "../../utils/calendar";
import "./SmallCalendar.scss";
import dayjs from "dayjs";

const SmallCalendar = ({ todayFormatted, calendar, currentDate }) => {
  return (
    <div className="calendar">
      <div className="calendar__body">
        {daysOfWeek.map((dayOfWeek) => (
          <span
            key={dayOfWeek}
            className="calendar__item calendar__item--grayed calendar__days"
          >
            {dayOfWeek}
          </span>
        ))}
        {calendar.map((day, i) => {
          const calendarMonth = day.month();
          const calendarDay = day.date();
          return (
            <span
              className={`${
                day.format("DD/MM/YYYY").toString() === todayFormatted
                  ? "calendar__item calendar__item--today"
                  : calendarMonth < currentDate.month() ||
                    calendarMonth > currentDate.month()
                  ? "calendar__item calendar__item--grayed"
                  : "calendar__item"
              }`}
              key={`${calendarDay}_${i}`}
            >
              {calendarDay}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SmallCalendar;
