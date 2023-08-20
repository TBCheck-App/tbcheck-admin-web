import React, { ChangeEvent, useEffect, useState } from "react";
import ButtonArrow from "./ButtonArrow";
import DateBox from "./DateBox";
import { getListOfDates } from "@/utils/date";
import { DateObject } from "@/type";

interface Props {
  group: string;
  subGroup: string;
}

function Calendar({ group, subGroup }: Props) {
  const [year, setYear] = useState<number>(2023);
  const [monthIndex, setMonthIndex] = useState<number>(7);
  // list of dates
  const [dates, setDates] = useState<DateObject[][]>([]);

  const handleChangeMonthIndex = (event: ChangeEvent<HTMLSelectElement>) => {
    setMonthIndex(parseInt(event.target.value));
  };

  const handleChangeYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(event.target.value));
  };

  const prevMonth = () => {
    if (monthIndex > 0) {
      setMonthIndex(monthIndex - 1);
    } else if (monthIndex == 0 && year != 2023) {
      setMonthIndex(11);
      setYear(year - 1);
    }
  };

  const nextMonth = () => {
    if (monthIndex < 11) {
      setMonthIndex(monthIndex + 1);
    } else if (monthIndex == 11 && year != 2029) {
      setMonthIndex(0);
      setYear(year + 1);
    }
  };

  useEffect(() => {
    setDates(getListOfDates(year, monthIndex));
  }, [year, monthIndex]);

  return (
    <div className="border-2 border-[#CAD0D8] rounded-lg w-[304px] p-4 flex flex-col gap-2">
      <div className="flex flex-row justify-center items-center text-sm">
        <ButtonArrow
          iconSrc="/arrow-left.svg"
          onClick={prevMonth}
        />
        <div className="flex flex-row gap-2">
          <select
            className="w-[106px] h-8 border-2 rounded-md"
            value={monthIndex}
            onChange={handleChangeMonthIndex}
          >
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">Desember</option>
          </select>

          <select
            className="h-8 border-2 rounded-md"
            value={year}
            onChange={handleChangeYear}
          >
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
          </select>
        </div>
        <ButtonArrow
          iconSrc="/arrow-right.svg"
          onClick={nextMonth}
        />
      </div>

      <div className="text-xs flex flex-col gap-1 font-medium">
        <header className="flex flex-row gap-2 text-[#546881]">
          <DateBox text="Su" />
          <DateBox text="Mo" />
          <DateBox text="Tu" />
          <DateBox text="We" />
          <DateBox text="Th" />
          <DateBox text="Fr" />
          <DateBox text="Sa" />
        </header>
        {dates.map((week, index) => {
          return (
            <div
              className="flex flex-row gap-2"
              key={index}
            >
              {week.map((day, index) => {
                if (day.thisMonth) {
                  return (
                    <DateBox
                      text={`${day.date}`}
                      href={`/daily-checkup/${group}${subGroup}/${day.dateParam}`}
                      key={index}
                    />
                  );
                }

                return (
                  <DateBox
                    text={`${day.date}`}
                    href={`/daily-checkup/${group}${subGroup}/${day.dateParam}`}
                    key={index}
                    className="text-[#546881]"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
