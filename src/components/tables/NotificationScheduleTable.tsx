import { NotificationSchedule } from "@/type";
import React from "react";
import RiskCurveBox from "../RiskCurveBox";

interface Props {
  data: NotificationSchedule;
}

const NotificationScheduleTable = ({ data }: Props) => {
  const sentDate = new Date(data.sentAt);

  return (
    <div
      id="columns"
      className="border-t grid grid-notification-table"
    >
      <div className="text-xs px-2 py-3 flex items-center">
        <p>{`${sentDate.getDate()}/${sentDate.getMonth()}/${sentDate.getFullYear()}`}</p>
      </div>
      <div className="text-xs px-2 py-3 flex items-center">
        <p>{`${
          sentDate.getHours() < 10
            ? "0" + sentDate.getHours()
            : sentDate.getHours()
        }:${
          sentDate.getMinutes() < 10
            ? "0" + sentDate.getMinutes()
            : sentDate.getMinutes()
        } WIB`}</p>
      </div>
      <div className="text-xs px-2 py-3 flex items-center">
        <p>{data.group}</p>
      </div>
      <div className="text-xs px-2 py-3 flex items-center">
        <RiskCurveBox risk={data.status} />
      </div>
    </div>
  );
};

export default NotificationScheduleTable;
