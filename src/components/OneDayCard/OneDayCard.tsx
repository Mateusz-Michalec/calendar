import { useEffect, useRef, useState } from "react";
import "./OneDayCard.scss";
import Modal from "../Modal/Modal";
import { EventType } from "../../hooks/useLocalStorage";
import useCalendar from "../../hooks/useCalendar";

const OneDayCard = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const calendar = useCalendar();
  if (!calendar) return null;
  const { events, deleteEvent, selectedDay } = calendar;

  const findEvents = () => {
    if (Array.isArray(events))
      return events.filter(
        (event) => event.date === selectedDay.format("DD/MM/YYYY").toString()
      );
    else return [];
  };

  const [selectedDayEvents, setSelectedDayEvents] =
    useState<EventType[]>(findEvents);

  useEffect(() => {
    setSelectedDayEvents(findEvents);
  }, [events, selectedDay]);

  return (
    <>
      <Modal ref={modalRef} />
      <div className="day-card">
        <h4 className="day-card__header">{selectedDay.year()}</h4>
        <div className="day-card__body">
          <h3 className="day-card__month">{selectedDay.format("MMMM")}</h3>
          <h2 className="day-card__day">{selectedDay.date()}</h2>
          <h3 className="day-card__month">{selectedDay.format("dddd")}</h3>
          <div className="day-card__events-wrapper">
            {selectedDayEvents.length > 0 ? (
              <ul className="day-card__event-list">
                {selectedDayEvents.map((event: EventType) => (
                  <li className="day-card__event" key={event.title}>
                    <div className="day-card__event-header">
                      <p className="day-card__event-title">{event.title}</p>
                      <button
                        onClick={() => {
                          deleteEvent(event.title);
                        }}
                        className="day-card__event-delete"
                      >
                        &#10005;
                      </button>
                    </div>
                    <p
                      className={`${event.desc ? "day-card__event-desc" : ""}`}
                    >
                      {event?.desc}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="day-card__no-events">Brak wydarzeń w tym dniu.</p>
            )}

            <button
              onClick={() => modalRef.current?.showModal()}
              className="day-card__add-event"
            >
              Dodaj wydarzenie
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneDayCard;
