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
      });
    }
  }
  const lastDateOfCurrentMonth = getLastDateOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  // current month
  for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
    if (result[0].length < 7) {
      result[0].push({ date: i, thisMonth: true });
    } else if (result[1].length < 7) {
      result[1].push({ date: i, thisMonth: true });
    } else if (result[2].length < 7) {
      result[2].push({ date: i, thisMonth: true });
    } else if (result[3].length < 7) {
      result[3].push({ date: i, thisMonth: true });
    } else if (result[4].length < 7) {
      result[4].push({ date: i, thisMonth: true });
    } else if (result[5].length < 7) {
      result[5].push({ date: i, thisMonth: true });
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
      });
      firstDateOfNextMonth.setDate(firstDateOfNextMonth.getDate() + 1);
    }

    while (result[5].length < 7) {
      result[5].push({
        date: firstDateOfNextMonth.getDate(),
        thisMonth: false,
      });
      firstDateOfNextMonth.setDate(firstDateOfNextMonth.getDate() + 1);
    }
  }

  return result;
};

export { getLastDateOfMonth, getDayIndex, getListOfDates };
