import React, { forwardRef, useRef, useState } from "react";
import "./Modal.scss";
import { EventType } from "../../hooks/useLocalStorage";
import dateIcon from "../../assets/icons/calendar-check.svg";

type PropsType = {
  selectedDay: string;
  addEvent: (event: EventType) => void;
};

const Modal = forwardRef<HTMLDialogElement, PropsType>(
  ({ selectedDay, addEvent }, ref) => {
    const [event, setEvent] = useState<EventType>({
      date: "",
      title: "",
    });

    const titleRef = useRef<HTMLInputElement>(null);

    const handleInput = (e: React.ChangeEvent<any>): void => {
      setEvent((prev) => {
        return {
          ...prev,
          date: selectedDay,
          [e.target.name]: e.target.value,
        };
      });
    };

    const clearAndCloseForm = () => {
      titleRef.current?.classList.remove("modal__input--error");
      setEvent({ date: "", title: "" });
      ref.current.close();
    };

    const validate = () => {
      if (event.title.length === 0)
        titleRef.current?.classList.add("modal__input--error");
      else {
        addEvent(event);
        clearAndCloseForm();
      }
    };

    const closeWhenOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        ref.current.close();
        clearAndCloseForm();
      }
    };

    return (
      <dialog onClick={(e) => closeWhenOutside(e)} ref={ref} className="modal">
        <div className="modal__control-bar">
          <button
            type="button"
            onClick={() => ref.current.close()}
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
            <span>{selectedDay}</span>
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
  }
);

export default Modal;
