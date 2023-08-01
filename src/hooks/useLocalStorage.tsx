import { useEffect, useState } from "react";

export type EventType = {
  date: string;
  title: string;
  desc?: string;
};

export type LocalStorageType = [
  EventType[] | [],
  (event: EventType) => void,
  (title: string) => void
];

const KEY = "calendarEvents";

export const useLocalStorage = (): LocalStorageType => {
  const storedEvents = localStorage.getItem(KEY);

  const [storedValue, setStoredValue] = useState<EventType[]>(
    storedEvents !== null ? JSON.parse(storedEvents) : []
  );

  const setValue = (event: EventType): void => {
    setStoredValue((prev) => [...prev, event]);
  };

  const deleteValue = (title: string): void => {
    setStoredValue((prev) => prev.filter((prev) => prev.title !== title));
  };

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setValue, deleteValue];
};
