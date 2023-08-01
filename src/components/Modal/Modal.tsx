import React, { forwardRef, useRef, useState } from "react";
import "./Modal.scss";
import { EventType } from "../../hooks/useLocalStorage";
import dateIcon from "../../assets/icons/calendar-check.svg";
import useCalendar from "../../hooks/useCalendar";

const Modal = forwardRef<HTMLDialogElement>((_props, ref) => {
  const [event, setEvent] = useState<EventType>({
    date: "",
    title: "",
  });

  const calendar = useCalendar();
  if (!calendar) return null;
  const { selectedDay, addEvent } = calendar;

  const titleRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<any>): void => {
    setEvent((prev) => {
      return {
        ...prev,
        date: selectedDay.format("DD/MM/YYYY").toString(),
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleCloseModal = () => {
    if (typeof ref !== "function" && ref?.current) ref?.current.close();
  };

  const clearAndCloseForm = () => {
    titleRef.current?.classList.remove("modal__input--error");
    setEvent({ date: "", title: "" });
    handleCloseModal();
  };

  const validate = () => {
    if (event.title.length === 0)
      titleRef.current?.classList.add("modal__input--error");
    else {
      if (typeof addEvent === "function") addEvent(event);
      clearAndCloseForm();
    }
  };

  const closeWhenOutside = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ) => {
    const element = e.target as HTMLDialogElement;
    if (element.classList.contains("modal")) {
      handleCloseModal();
      clearAndCloseForm();
    }
  };

  return (
    <dialog onClick={(e) => closeWhenOutside(e)} ref={ref} className="modal">
      <div className="modal__control-bar">
        <button
          type="button"
          onClick={() => handleCloseModal()}
          className="modal__close-btn"
        >
          &#10005;
        </button>
      </div>
      <form className="modal__form">
        <input
          ref={titleRef}
          placeholder="Dodaj tytuł"
          type="text"
          name="title"
          className="modal__input modal__input--title"
          value={event.title || ""}
          onChange={handleInput}
        />
        <div>
          <img src={dateIcon} className="modal__icon" alt="Data" />
          <span>{selectedDay.format("DD/MM/YYYY").toString()}</span>
        </div>

        <input
          placeholder="Dodaj opis"
          type="text"
          name="desc"
          className="modal__input"
          value={event.desc || ""}
          onChange={handleInput}
        />

        <button
          type="button"
          onClick={() => validate()}
          className="modal__save-btn"
        >
          Zapisz
        </button>
      </form>
    </dialog>
  );
});

export default Modal;
