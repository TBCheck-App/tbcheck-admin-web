"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import Calendar from "@/components/calendar/Calendar";
import { groupList } from "@/config/var";
import { tokenIsValid } from "@/utils/auth";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    subgroup: string;
  };
}

function DailyCheckUpCalendar({ params }: Props) {
  const [render, setRender] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
      tokenIsValid().then((res) => {
        setRender(res);

        if (res == false) {
          router.push("signin");
        }
      });
    }
  }, []);

  if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
    if (render) {
      const group = params.subgroup.split("")[0];
      const subGroup = params.subgroup.split("")[1];

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
    }
  } else {
    redirect("/daily-checkup");
  }
}

export default DailyCheckUpCalendar;
