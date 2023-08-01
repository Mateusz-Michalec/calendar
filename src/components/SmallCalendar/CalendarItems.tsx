import dayjs from "dayjs";
import useCalendar from "../../hooks/useCalendar";

const CalendarItems = () => {
  const calendarContext = useCalendar();
  if (!calendarContext) return null;

  const { calendar, events, currentDate, selectedDay, setSelectedDay } =
    calendarContext;

  const todayFormatted = dayjs().format("DD/MM/YYYY").toString();

  const isEvent = (dayFormatted: string): boolean | undefined => {
    if (Array.isArray(events))
      return events.some((event) => event.date === dayFormatted);
  };

  return calendar.map((day) => {
    const calendarMonth = day.month();
    const calendarDay = day.date();
    const dayFormatted = day.format("DD/MM/YYYY").toString();

    return (
      <span
        key={dayFormatted}
        onClick={() => {
          setSelectedDay(day);
        }}
        className={`calendar__item ${
          calendarMonth < currentDate.month() ||
          calendarMonth > currentDate.month()
            ? " calendar__item--grayed"
            : ""
        }
      ${dayFormatted === todayFormatted ? " calendar__item--today" : ""} 
      ${isEvent(dayFormatted) ? " calendar__item--event" : ""}
      ${
        dayFormatted === selectedDay.format("DD/MM/YYYY").toString()
          ? " calendar__item--selected"
          : ""
      }
      `}
      >
        {calendarDay}
      </span>
    );
  });
};

export default CalendarItems;
