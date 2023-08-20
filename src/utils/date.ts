import { DateObject } from "@/type";

const getLastDateOfMonth = (year: number, monthIndex: number): number => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const getDayIndex = (
  year: number,
  monthIndex: number,
  date: number
): number => {
  return new Date(year, monthIndex, date).getDay();
};

const getListOfDates = (year: number, monthIndex: number): DateObject[][] => {
  let result: DateObject[][] = [[], [], [], [], [], []];
  const currentDate = new Date(year, monthIndex);
  const dayIndexOfFirstDateCurrentMonth = getDayIndex(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  if (dayIndexOfFirstDateCurrentMonth > 0) {
    const firstDateOfCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    // before current month
    for (let i = 0; i < dayIndexOfFirstDateCurrentMonth; i++) {
      firstDateOfCurrentMonth.setDate(firstDateOfCurrentMonth.getDate() - 1);

      result[0].unshift({
        date: firstDateOfCurrentMonth.getDate(),
        thisMonth: false,
        dateParam: `${firstDateOfCurrentMonth.getFullYear()}-${
          firstDateOfCurrentMonth.getMonth() + 1
        }-${firstDateOfCurrentMonth.getDate()}`,
      });
    }
  }
  const lastDateOfCurrentMonth = getLastDateOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  // current month
  for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
    const date: DateObject = {
      date: i,
      thisMonth: true,
      dateParam: `${currentDate.getFullYear()}-${
        currentDate.getMonth() + 1
      }-${i}`,
    };
    if (result[0].length < 7) {
      result[0].push(date);
    } else if (result[1].length < 7) {
      result[1].push(date);
    } else if (result[2].length < 7) {
      result[2].push(date);
    } else if (result[3].length < 7) {
      result[3].push(date);
    } else if (result[4].length < 7) {
      result[4].push(date);
    } else if (result[5].length < 7) {
      result[5].push(date);
    }
  }
  if (result[4].length < 7 || result[5].length < 7) {
    const firstDateOfNextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    while (result[4].length < 7) {
      result[4].push({
        date: firstDateOfNextMonth.getDate(),
        thisMonth: false,
        dateParam: `${firstDateOfNextMonth.getFullYear()}-${
          firstDateOfNextMonth.getMonth() + 1
        }-${firstDateOfNextMonth.getDate()}`,
      });
      firstDateOfNextMonth.setDate(firstDateOfNextMonth.getDate() + 1);
    }

    while (result[5].length < 7) {
      result[5].push({
        date: firstDateOfNextMonth.getDate(),
        thisMonth: false,
        dateParam: `${firstDateOfNextMonth.getFullYear()}-${
          firstDateOfNextMonth.getMonth() + 1
        }-${firstDateOfNextMonth.getDate()}`,
      });
      firstDateOfNextMonth.setDate(firstDateOfNextMonth.getDate() + 1);
    }
  }

  return result;
};

export { getLastDateOfMonth, getDayIndex, getListOfDates };
