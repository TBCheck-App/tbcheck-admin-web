"use client";
import Calendar from "@/components/calendar/Calendar";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import ChooseGroupSection from "@/components/sections/daily-checkup/ChooseGroupSection";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ChooseCalendarSection from "@/components/sections/daily-checkup/ChooseCalendarSection";

function DailyCheckUp() {
  const [render, setRender] = useState<boolean>(false);
  const [showCalendarPage, setShowCalendarPage] = useState<boolean>(false);

  const router = useRouter();

  const goToCalendar = () => {
    setShowCalendarPage(true);
  };

  const backToChooseGroup = () => {
    setShowCalendarPage(false);
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
          <ChooseCalendarSection />
        ) : (
          <ChooseGroupSection goToCalendar={goToCalendar} />
        )}
      </div>
    );
  }
}

export default DailyCheckUp;
