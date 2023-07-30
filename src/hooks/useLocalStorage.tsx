import { useEffect, useState } from "react";

export type EventType = {
  date: string;
  title: string;
  desc?: string;
};

const KEY = "calendarEvents";

export const useLocalStorage = () => {
  const storedEvents = localStorage.getItem(KEY);

  const [storedValue, setStoredValue] = useState<EventType[]>(
    storedEvents !== null ? JSON.parse(storedEvents) : []
  );

  const setValue = (event: EventType): void => {
    setStoredValue((prev) => [...prev, event]);
  };

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setValue];
};
