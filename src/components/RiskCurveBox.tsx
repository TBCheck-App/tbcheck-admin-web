import { Risk } from "@/type";
import React from "react";

interface Props {
  risk: Risk;
}

function RiskCurveBox({ risk }: Props) {
  if (risk == "HIGH_RISK") {
    return (
      <p className="py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px]">
        Berisiko Tinggi
      </p>
    );
  } else if (risk == "MEDIUM_RISK") {
    return (
      <p className="py-1 w-[90%] bg-[#FFF2B0] text-[#736000] font-semibold text-center rounded-[100px]">
        Berisiko
      </p>
    );
  } else if (risk == "LOW_RISK") {
    return (
      <p className="py-1 w-[90%] bg-[#CDEFEC] text-[#2B5B58] font-semibold text-center rounded-[100px]">
        Berisiko Rendah
      </p>
    );
  }
}

export default RiskCurveBox;
