import "./Navbar.scss";
import MonthChanger from "../MonthChanger/MonthChanger";
import dayjs from "dayjs";
import useCalendar from "../../hooks/useCalendar";

const Navbar = () => {
  const calendarContext = useCalendar();
  if (!calendarContext) return;

  const { currentDate, setCurrentDate, setSelectedDay } = calendarContext;

  const handleToday = () => {
    const today = dayjs();
    setCurrentDate(today);
    setSelectedDay(today);
  };

  return (
    <nav className="navbar">
      <div>
        <span className="navbar__logo">{currentDate.date()}</span>
        <span className="navbar__logo-text">Kalendarz</span>
      </div>
      <button onClick={() => handleToday()} className="navbar__today-btn">
        Dzisiaj
      </button>
      <MonthChanger />
    </nav>
  );
};

export default Navbar;
