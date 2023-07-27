import React, { useState } from "react";
import { generateDate, daysOfWeek } from "../../utils/calendar";
import "./SmallCalendar.scss";
import { CurrentDateType } from "../../App";

type PropsType = {
  currentDate: CurrentDateType;
};

const SmallCalendar = ({ currentDate }: PropsType) => {
  const [calendar, setCalendar] = useState(
    generateDate(currentDate.month, currentDate.year)
  );

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
                day.date() === currentDate.day &&
                calendarMonth === currentDate.month
                  ? "calendar__item calendar__item--today"
                  : calendarMonth < currentDate.month ||
                    calendarMonth > currentDate.month
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
