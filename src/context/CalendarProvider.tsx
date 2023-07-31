import { ReactElement, createContext, useEffect, useState } from "react";
import { generateDate } from "../utils/calendar";
import dayjs from "dayjs";
import { EventType, useLocalStorage } from "../hooks/useLocalStorage";

type CalendarContextType = {
  todayFormatted: string;
  currentDate: dayjs.Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  calendar: dayjs.Dayjs[];
  events: EventType[];
  addEvent: (event: EventType) => void;
};

export const CalendarContext = createContext<CalendarContextType | null>(null);

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

export const CalendarProvider = ({ children }: ChildrenType): ReactElement => {
  const [todayFormatted] = useState(dayjs().format("DD/MM/YYYY").toString());
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState(generateDate());
  const [events, addEvent] = useLocalStorage();
  const [selectedDay, setSelectedDay] = useState<string>(todayFormatted);

  useEffect(() => {
    setCalendar(generateDate(currentDate.month(), currentDate.year()));
  }, [currentDate]);

  return (
    <CalendarContext.Provider
      value={{
        todayFormatted,
        currentDate,
        setCurrentDate,
        calendar,
        events,
        addEvent,
        selectedDay,
        setSelectedDay,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};
