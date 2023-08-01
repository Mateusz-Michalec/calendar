import { ReactElement, createContext, useEffect, useState } from "react";
import { generateDate } from "../utils/calendar";
import dayjs from "dayjs";
import { LocalStorageType, useLocalStorage } from "../hooks/useLocalStorage";

type CalendarContextType = {
  currentDate: dayjs.Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  calendar: dayjs.Dayjs[];
  events: LocalStorageType[0];
  addEvent: LocalStorageType[1];
  deleteEvent: LocalStorageType[2];
  selectedDay: dayjs.Dayjs;
  setSelectedDay: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
};

export const CalendarContext = createContext<CalendarContextType | null>(null);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CalendarProvider = ({ children }: ChildrenType): ReactElement => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState(generateDate());
  const [events, addEvent, deleteEvent] = useLocalStorage();
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs>(dayjs());

  useEffect(() => {
    setCalendar(generateDate(currentDate.month(), currentDate.year()));
  }, [currentDate]);

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        calendar,
        events,
        addEvent,
        deleteEvent,
        selectedDay,
        setSelectedDay,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
