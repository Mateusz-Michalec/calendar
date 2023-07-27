import React from "react";
import "./Navbar.scss";
import { CurrentDateType } from "../../App";
import MonthChanger from "../MonthChanger/MonthChanger";

type PropsType = {
  currentDate: CurrentDateType;
  setCurrentDate: React.Dispatch<React.SetStateAction<CurrentDateType>>;
};

const Navbar = ({ currentDate, setCurrentDate }: PropsType) => {
  return (
    <nav className="navbar">
      <div>
        <span className="navbar__logo">{currentDate.day}</span>
        <span className="navbar__logo-text">Kalendarz</span>
      </div>
      <button className="navbar__today-btn">Dzisiaj</button>
      <MonthChanger currentDate={currentDate} setCurrentDate={setCurrentDate} />
    </nav>
  );
};

export default Navbar;
