import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDayOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDayOfMoth = dayjs().year(year).month(month).endOf("month");

  const dateArr = [];

  // days of previous month
  for (let i = 1; i < firstDayOfMonth.day(); i++) {
    dateArr.push(firstDayOfMonth.day(i));
  }

  // days of current month
  for (let i = firstDayOfMonth.date(); i <= lastDayOfMoth.date(); i++) {
    dateArr.push(firstDayOfMonth.date(i));
  }

  const nextDaysCount = 42 - dateArr.length;

  // days of next month
  for (let i = lastDayOfMoth.day(); i <= nextDaysCount; i++) {
    dateArr.push(lastDayOfMoth.day(i + 1));
  }

  return dateArr;
};

export const daysOfWeek = ["pon", "wto", "śro", "czw", "pią", "sob", "nie"];
