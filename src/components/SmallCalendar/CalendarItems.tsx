import useCalendar from "../../hooks/useCalendar";

const CalendarItems = () => {
  const {
    calendar,
    events,
    todayFormatted,
    currentDate,
    selectedDay,
    setSelectedDay,
  } = useCalendar();

  const isEvent = (dayFormatted: string) =>
    events.some((event) => event.date === dayFormatted);

  return calendar.map((day) => {
    const calendarMonth = day.month();
    const calendarDay = day.date();
    const dayFormatted = day.format("DD/MM/YYYY").toString();

    return (
      <span
        key={dayFormatted}
        onClick={() => {
          setSelectedDay(dayFormatted);
        }}
        className={`calendar__item ${
          calendarMonth < currentDate.month() ||
          calendarMonth > currentDate.month()
            ? " calendar__item--grayed"
            : ""
        }
      ${dayFormatted === todayFormatted ? " calendar__item--today" : ""} 
      ${isEvent(dayFormatted) ? " calendar__item--event" : ""}
      ${dayFormatted === selectedDay ? " calendar__item--selected" : ""}
      `}
      >
        {calendarDay}
      </span>
    );
  });
};

export default CalendarItems;
