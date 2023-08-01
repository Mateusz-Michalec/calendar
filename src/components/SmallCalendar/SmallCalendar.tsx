import { daysOfWeek } from "../../utils/calendar";
import "./SmallCalendar.scss";
import CalendarItems from "./CalendarItems";
import Navbar from "../Navbar/Navbar";

const SmallCalendar = () => {
  return (
    <>
      <div className="calendar">
        <Navbar />
        <div className="calendar__body">
          {daysOfWeek.map((dayOfWeek) => (
            <span key={dayOfWeek} className="calendar__item calendar__days">
              {dayOfWeek}
            </span>
          ))}
          <CalendarItems />
        </div>
      </div>
    </>
  );
};

export default SmallCalendar;
