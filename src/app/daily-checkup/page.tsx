"use client";
import Calendar from "@/components/calendar/Calendar";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import ChooseGroupSection from "@/components/sections/daily-checkup/ChooseGroupSection";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import ChooseCalendarSection from "@/components/sections/daily-checkup/ChooseCalendarSection";

function DailyCheckUp() {
  const [render, setRender] = useState<boolean>(false);
  const [showCalendarPage, setShowCalendarPage] = useState<boolean>(false);
  const [group, setGroup] = useState<string>("A");
  const [subGroup, setSubGroup] = useState<string>("1");

  const router = useRouter();

  const goToCalendar = () => {
    setShowCalendarPage(true);
  };

  const backToChooseGroup = () => {
    setShowCalendarPage(false);
  };

  const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroup(event.target.value);
  };

  const handleChangeSubGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubGroup(event.target.value);
  };

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("signin");
      }
    });
  }, []);

  if (render) {
    return (
      <div className="flex flex-col gap-8">
        <div className="px-4">
          {showCalendarPage ? (
            <ButtonBack
              buttonText="Kembali"
              onClick={backToChooseGroup}
            />
          ) : (
            <ButtonBack
              buttonText="Home"
              destPage="/"
            />
          )}
        </div>

        {showCalendarPage ? (
          <ChooseCalendarSection
            group={group}
            subGroup={subGroup}
          />
        ) : (
          <ChooseGroupSection
            goToCalendar={goToCalendar}
            group={group}
            subGroup={subGroup}
            handleChangeGroup={handleChangeGroup}
            handleChangeSubGroup={handleChangeSubGroup}
          />
        )}
      </div>
    );
  }
}

export default DailyCheckUp;
