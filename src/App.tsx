import "./App.scss";
import SmallCalendar from "./components/SmallCalendar/SmallCalendar";
import dayjs from "dayjs";
import Navbar from "./components/Navbar/Navbar";
import "dayjs/locale/pl";
dayjs.locale("pl");

function App() {
  return (
    <div className="app">
      <Navbar />
      <SmallCalendar />
    </div>
  );
}

export default App;
