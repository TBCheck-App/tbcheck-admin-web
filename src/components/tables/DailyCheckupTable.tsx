import { Risk } from "@/type";
import React from "react";
import RiskCurveBox from "../RiskCurveBox";

interface Props {
  // dailyReport: {
  //   id: string;
  //   reportedAt: string;
  //   result: "HIGH_RISK" | "MEDIUM_RISK" | "LOW_RISK";
  //   name: string;
  // };
  risk: Risk;
}

function DailyCheckupTable({ risk }: Props) {
  return (
    <div className="text-xs h-12 grid grid-daily-checkup-table border-t">
      <div className="p-2 flex justify-center items-center">
        <p>14:00:00</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <a
          className="font-semibold text-[#5497F6]"
          href=""
        >
          Azmi Ramadisha
        </a>
      </div>
      <div className="p-2 flex justify-center items-center">
        <RiskCurveBox risk={risk} />
      </div>
    </div>
  );
}

export default DailyCheckupTable;
