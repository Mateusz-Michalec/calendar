import "./App.scss";
import SmallCalendar from "./components/SmallCalendar/SmallCalendar";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import OneDayCard from "./components/OneDayCard/OneDayCard";
dayjs.locale("pl");

function App() {
  return (
    <div className="app">
      <SmallCalendar />
      <OneDayCard />
    </div>
  );
}

export default App;
