import Calendar from "@/components/calendar/Calendar";
import React from "react";

interface Props {
  group: string;
  subGroup: string;
}

function ChooseCalendarSection({ group, subGroup }: Props) {
  return (
    <div className="px-4 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Pilih Tanggal Laporan</h1>
        <h2 className="font-bold text-xl">Sub-group {`${group}${subGroup}`}</h2>
      </div>

      <div className="flex justify-center">
        <Calendar
          group={group}
          subGroup={subGroup}
        />
      </div>
    </div>
  );
}

export default ChooseCalendarSection;
