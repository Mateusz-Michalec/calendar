import React from "react";
import "./Navbar.scss";

import MonthChanger from "../MonthChanger/MonthChanger";
import dayjs from "dayjs";

const Navbar = ({ today, currentDate, setCurrentDate }) => {
  return (
    <nav className="navbar">
      <div>
        <span className="navbar__logo">{currentDate.date()}</span>
        <span className="navbar__logo-text">Kalendarz</span>
      </div>
      <button
        onClick={() => setCurrentDate(dayjs())}
        className="navbar__today-btn"
      >
        Dzisiaj
      </button>
      <MonthChanger currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </nav>
  );
};

export default Navbar;
