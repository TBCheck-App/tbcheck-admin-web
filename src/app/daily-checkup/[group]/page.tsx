"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import Calendar from "@/components/calendar/Calendar";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: {
    group: string;
  };
}

const groupList = [
  "A1",
  "A2",
  "B1",
  "B2",
  "C1",
  "C2",
  "D1",
  "D2",
  "E1",
  "E2",
  "F1",
  "F2",
  "G1",
  "G2",
  "H1",
  "H2",
];

function DailyCheckUpCalendar({ params }: Props) {
  if (params.group.length <= 2 && groupList.includes(params.group)) {
    const group = params.group.split("")[0];
    const subGroup = params.group.split("")[1];

    return (
      <main className="flex flex-col gap-8">
        <div className="px-4">
          <ButtonBack
            buttonText="Kembali"
            destPage="/daily-checkup"
          />
        </div>

        <div className="px-4 flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <h1 className="font-bold text-2xl">Pilih Tanggal Laporan</h1>
            <h2 className="font-bold text-xl">
              Sub-group {`${group}${subGroup}`}
            </h2>
          </div>

          <div className="flex justify-center">
            <Calendar
              group={group}
              subGroup={subGroup}
            />
          </div>
        </div>
      </main>
    );
  } else {
    redirect("/daily-checkup");
  }
}

export default DailyCheckUpCalendar;
