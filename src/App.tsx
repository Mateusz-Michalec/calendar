import { useEffect, useState } from "react";
import "./App.scss";
import SmallCalendar from "./components/SmallCalendar/SmallCalendar";
import dayjs from "dayjs";
import Navbar from "./components/Navbar/Navbar";
import "dayjs/locale/pl";
import { generateDate } from "./utils/calendar";
import OneDayCard from "./components/OneDayCard/OneDayCard";
dayjs.locale("pl");

export type CurrentDateStateType = {
  currentDate: dayjs.Dayjs;
  setCurrentDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
};

function App() {
  const [todayFormatted] = useState(dayjs().format("DD/MM/YYYY").toString());
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [calendar, setCalendar] = useState(generateDate());

  useEffect(() => {
    setCalendar(generateDate(currentDate.month(), currentDate.year()));
  }, [currentDate]);

  return (
    <div className="app">
      <Navbar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <SmallCalendar
        todayFormatted={todayFormatted}
        calendar={calendar}
        currentDate={currentDate}
      />
    </div>
  );
}

export default App;
