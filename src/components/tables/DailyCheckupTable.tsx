import { DailyCheckupTableType, Risk } from "@/type";
import React from "react";
import RiskCurveBox from "../RiskCurveBox";

interface Props {
  // dailyReport: {
  //   id: string;
  //   reportedAt: string;
  //   result: "HIGH_RISK" | "MEDIUM_RISK" | "LOW_RISK";
  //   name: string;
  // };
  data: DailyCheckupTableType;
  params: {
    subgroup: string;
    date: string;
  };
}

function DailyCheckupTable({ data, params }: Props) {
  const date = new Date(data.reportedAt);

  return (
    <div className="text-xs h-12 grid grid-daily-checkup-table border-t">
      <div className="p-2 flex justify-center items-center">
        <p>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <a
          className="font-semibold text-[#5497F6]"
          href={`/daily-checkup/${params.subgroup}/${params.date}/${data.id}`}
        >
          {data.name}
        </a>
      </div>
      <div className="p-2 flex justify-center items-center">
        <RiskCurveBox risk={data.result} />
      </div>
    </div>
  );
}

export default DailyCheckupTable;
