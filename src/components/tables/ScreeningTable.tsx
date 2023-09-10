import React from "react";
import RiskCurveBox from "../RiskCurveBox";
import { ScreeningResult } from "@/type";
import { group } from "console";

interface Props {
  id: string;
  risk: ScreeningResult;
  group: string;
  name: string;
  dateString: string;
}

function ScreeningTable({ id, risk, group, name, dateString }: Props) {
  const date = new Date(dateString);
  let dateNumber = "DD";
  if (date.getDate() < 10) {
    dateNumber = `0${date.getDate()}`;
  } else {
    dateNumber = `${date.getDate()}`;
  }
  let month = "MM";
  if (date.getMonth() + 1 < 10) {
    month = `0${date.getMonth() + 1}`;
  } else {
    month = `${date.getMonth() + 1}`;
  }
  const year = date.getFullYear();

  return (
    <div className="grid h-14 text-xs grid-screening-table text-center border-t">
      <div className="flex justify-center items-center">
        <p>{`${dateNumber}/${month}/${year}`}</p>
      </div>
      <div className="flex justify-center items-center">
        <p>{group}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <a
          className="font-semibold text-[#5497F6]"
          href={`/screening/${id}`}
        >
          {name}
        </a>
      </div>
      <div className="p-2 flex justify-center items-center">
        <RiskCurveBox risk={risk} />
      </div>
    </div>
  );
}

export default ScreeningTable;
