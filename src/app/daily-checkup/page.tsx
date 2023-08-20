"use client";
import Calendar from "@/components/calendar/Calendar";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import ChooseGroupSection from "@/components/sections/daily-checkup/ChooseGroupSection";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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
          <div className="px-4">
            <div className="text-center flex flex-col gap-3">
              <h1 className="font-bold text-2xl">Pilih Tanggal Laporan</h1>
              <h2 className="font-bold text-xl">Sub-group G1</h2>
            </div>

            <div className="flex justify-center">
              <Calendar />
            </div>
          </div>
        ) : (
          <ChooseGroupSection goToCalendar={goToCalendar} />
        )}
      </div>
    );
  }
}

export default DailyCheckUp;
