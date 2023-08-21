import React from "react";
import RiskCurveBox from "./RiskCurveBox";
import { Risk } from "@/type";

interface Props {
  risk: Risk;
}

function ScreeningTable({ risk }: Props) {
  return (
    <div className="grid h-14 text-xs grid-screening-table text-center border-t">
      <div className="flex justify-center items-center">
        <p>30/07/2023</p>
      </div>
      <div className="flex justify-center items-center">
        <p>A</p>
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

export default ScreeningTable;
