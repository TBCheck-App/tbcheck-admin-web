import { Risk, ScreeningResult } from "@/type";
import React from "react";

interface Props {
  risk: Risk | ScreeningResult;
  className?: string;
}

function RiskCurveBox({ risk, className }: Props) {
  if (risk == "HIGH_RISK") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px] ${className}`}
      >
        Berisiko Tinggi
      </p>
    );
  } else if (risk == "MEDIUM_RISK") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FFF2B0] text-[#736000] font-semibold text-center rounded-[100px] ${className}`}
      >
        Berisiko
      </p>
    );
  } else if (risk == "LOW_RISK") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#CDEFEC] text-[#2B5B58] font-semibold text-center rounded-[100px] ${className}`}
      >
        Berisiko Rendah
      </p>
    );
  } else if (risk == "NOT_SUSPECTED_TB") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#CDEFEC] text-[#2B5B58] font-semibold text-center rounded-[100px] ${className}`}
      >
        Bukan Terduga TBC
      </p>
    );
  } else if (risk == "UNDERGOING_TREATMENT") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FFF2B0] text-[#736000] font-semibold text-center rounded-[100px] ${className}`}
      >
        Menjalani Pengobatan
      </p>
    );
  } else if (risk == "SUSPECTED_TB_RO") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px] ${className}`}
      >
        Terduga TBC RO
      </p>
    );
  } else if (risk == "SUSPECTED_TB") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px] ${className}`}
      >
        Terduga TBC
      </p>
    );
  }
}

export default RiskCurveBox;
