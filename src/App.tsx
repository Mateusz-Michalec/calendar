import { useState } from "react";
import "./App.scss";
import SmallCalendar from "./components/SmallCalendar/SmallCalendar";
import dayjs from "dayjs";

export type CurrentDateType = {
  day: number;
  month: number;
  year: number;
};

function App() {
  const [currentDate, setCurrentDate] = useState<CurrentDateType>({
    day: dayjs().date(),
    month: dayjs().month(),
    year: dayjs().year(),
  });

  return (
    <div>
      <SmallCalendar currentDate={currentDate} />
    </div>
  );
}

export default App;
