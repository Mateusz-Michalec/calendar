import { useContext } from "react";
import { CalendarContext } from "../context/CalendarProvider";

const useCalendar = () => useContext(CalendarContext);

export default useCalendar;
