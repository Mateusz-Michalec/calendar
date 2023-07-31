import { daysOfWeek } from "../../utils/calendar";
import "./SmallCalendar.scss";
import OneDayCard from "../OneDayCard/OneDayCard";
import CalendarItems from "./CalendarItems";

const SmallCalendar = () => {
  return (
    <>
      <div className="calendar">
        <div className="calendar__body">
          {daysOfWeek.map((dayOfWeek) => (
            <span key={dayOfWeek} className="calendar__item calendar__days">
              {dayOfWeek}
            </span>
          ))}
          <CalendarItems />
        </div>
      </div>
      <OneDayCard />
    </>
  );
};

export default SmallCalendar;
