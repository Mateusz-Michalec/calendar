import React, { useEffect, useRef, useState } from "react";
import "./OneDayCard.scss";
import Modal from "../Modal/Modal";
import { EventType } from "../../hooks/useLocalStorage";
import useCalendar from "../../hooks/useCalendar";

const OneDayCard = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { selectedDay, events, addEvent } = useCalendar();

  const findEvents = () => events.filter((event) => event.date === selectedDay);

  const [selectedDayEvents, setSelectedDayEvents] = useState(findEvents);

  useEffect(() => {
    setSelectedDayEvents(findEvents);
  }, [events, selectedDay]);

  return (
    <>
      <Modal addEvent={addEvent} ref={modalRef} selectedDay={selectedDay} />
      <div className="day__card">
        <h4 className="day__card__selected-day">{selectedDay}</h4>
        {selectedDayEvents.length > 0 ? (
          <ol>
            {selectedDayEvents.map((event: EventType) => (
              <li key={event.title}>{event.title}</li>
            ))}
          </ol>
        ) : (
          <p>Brak wydarzeń w tym dniu.</p>
        )}

        <button
          onClick={() => modalRef.current?.showModal()}
          className="day__card__add-event"
        >
          Dodaj wydarzenie
        </button>
      </div>
    </>
  );
};

export default OneDayCard;
