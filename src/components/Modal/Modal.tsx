import React, { forwardRef, useRef, useState } from "react";
import "./Modal.scss";
import { EventType } from "../../hooks/useLocalStorage";

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
          date: selectedDay,
          [e.target.name]: e.target.value,
        };
      });
    };

    const validate = () => {
      if (event.title.length === 0)
        titleRef.current?.classList.add("modal__input--error");
      else {
        addEvent(event);
        ref.current.close();
      }
    };

    return (
      <dialog ref={ref} className="modal">
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
            value={event.title}
            onChange={handleInput}
          />
          <span>{selectedDay}</span>
          <input
            placeholder="Dodaj opis"
            type="text"
            name="desc"
            className="modal__input"
            value={event.desc}
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
