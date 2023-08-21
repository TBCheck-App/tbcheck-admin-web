import React from "react";

interface Props {
  // dailyReport: {
  //   id: string;
  //   reportedAt: string;
  //   result: "HIGH_RISK" | "MEDIUM_RISK" | "LOW_RISK";
  //   name: string;
  // };
  risk: "HIGH_RISK" | "MEDIUM_RISK" | "LOW_RISK";
}

function DailyCheckupTable({ risk }: Props) {
  return (
    <div className="text-xs h-12 grid grid-daily-checkup-table">
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
        {risk == "HIGH_RISK" ? (
          <p className="py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px]">
            Berisiko Tinggi
          </p>
        ) : null}

        {risk == "MEDIUM_RISK" ? (
          <p className="py-1 w-[90%] bg-[#FFF2B0] text-[#736000] font-semibold text-center rounded-[100px]">
            Berisiko
          </p>
        ) : null}

        {risk == "LOW_RISK" ? (
          <p className="py-1 w-[90%] bg-[#CDEFEC] text-[#2B5B58] font-semibold text-center rounded-[100px]">
            Berisiko Rendah
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default DailyCheckupTable;
