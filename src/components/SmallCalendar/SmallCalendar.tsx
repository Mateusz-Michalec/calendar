import React, { useEffect, useState } from "react";
import { generateDate, daysOfWeek } from "../../utils/calendar";
import "./SmallCalendar.scss";
import dayjs from "dayjs";
import OneDayCard from "../OneDayCard/OneDayCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type PropsType = {
  calendar: dayjs.Dayjs[];
  currentDate: dayjs.Dayjs;
  todayFormatted: string;
};

const SmallCalendar = ({
  todayFormatted,
  calendar,
  currentDate,
}: PropsType) => {
  const [selectedDay, setSelectedDay] = useState<string>(todayFormatted);
  const [events] = useLocalStorage();

  const isEvent = (dayFormatted: string) =>
    events.some((event) => event.date === dayFormatted);

  return (
    <>
      <div className="calendar">
        <div className="calendar__body">
          {daysOfWeek.map((dayOfWeek) => (
            <span key={dayOfWeek} className="calendar__item calendar__days">
              {dayOfWeek}
            </span>
          ))}
          {calendar.map((day, i) => {
            const calendarMonth = day.month();
            const calendarDay = day.date();
            const dayFormatted = day.format("DD/MM/YYYY").toString();

            let calendarItemClass = "calendar__item";

            if (isEvent(dayFormatted))
              calendarItemClass += " calendar__item--event";

            if (
              calendarMonth < currentDate.month() ||
              calendarMonth > currentDate.month()
            )
              calendarItemClass += " calendar__item--grayed";

            if (dayFormatted === todayFormatted)
              calendarItemClass += " calendar__item--today";
            else if (dayFormatted === selectedDay)
              calendarItemClass += " calendar__item--selected";

            return (
              <span
                onClick={() => {
                  setSelectedDay(dayFormatted);
                }}
                className={calendarItemClass}
                key={`${calendarDay}_${i}`}
              >
                {calendarDay}
              </span>
            );
          })}
        </div>
      </div>
      <OneDayCard selectedDay={selectedDay} />
    </>
  );
};

export default SmallCalendar;
