import React from "react";
import ButtonOutlined from "./buttons/ButtonOutlined";
import { MWTHistoryLog } from "@/type";
import { dayNames, enforcementGroups, monthNames } from "@/config/var";
import { redirect, useRouter } from "next/navigation";

interface Props {
  mwtLog: MWTHistoryLog;
}

const MWTCard = ({ mwtLog }: Props) => {
  const date = new Date(mwtLog.date);

  const router = useRouter();

  const goToDetailMWT = () => {
    router.push(
      `/mask-wearing-tracker/${mwtLog.group}${mwtLog.subGroup}/${mwtLog.id}`
    );
  };

  return (
    <div className="border p-3 rounded flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="font-bold">
          {dayNames[date.getDay()]}, {date.getDate()}{" "}
          {monthNames[date.getMonth()]} {date.getFullYear()}
        </p>
        <p>
          {date.getHours()}.{date.getMinutes()} WIB
        </p>
      </div>

      <div className="grid grid-cols-2 gap-y-4">
        <p className="font-bold text-sm">Ya</p>
        <p>{mwtLog.yes} Orang</p>
        {enforcementGroups.includes(mwtLog.group) ? (
          <p className="font-bold text-sm">Ya, setelah dihimbau</p>
        ) : null}
        {enforcementGroups.includes(mwtLog.group) ? (
          <p>{mwtLog.withEnforcement} Orang</p>
        ) : null}
        <p className="font-bold text-sm">Tidak</p>
        <p>{mwtLog.no} Orang</p>
        <p className="font-bold text-sm">Total</p>
        <p>{mwtLog.totalUsers} Orang</p>
      </div>

      <div className="flex justify-end">
        <div className="w-[91px]">
          <ButtonOutlined
            text="Lihat Detail"
            onClick={goToDetailMWT}
          />
        </div>
      </div>
    </div>
  );
};

export default MWTCard;
