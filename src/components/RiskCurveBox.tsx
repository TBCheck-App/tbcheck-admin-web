import {
  Risk,
  ScreeningResult,
  TBReportAnswer,
  NotificationStatus,
} from "@/type";
import React from "react";

interface Props {
  risk: Risk | ScreeningResult | TBReportAnswer | NotificationStatus;
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
  } else if (risk == "YES") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px] ${className}`}
      >
        Positif
      </p>
    );
  } else if (risk == "NO") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FFF2B0] text-[#736000] font-semibold text-center rounded-[100px] ${className}`}
      >
        Negatif
      </p>
    );
  } else if (risk == "UNKNOWN") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#CDEFEC] text-[#2B5B58] font-semibold text-center rounded-[100px] ${className}`}
      >
        Tidak Tahu
      </p>
    );
  } else if (risk == "SUCCESS") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#CDEFEC] text-[#2B5B58] font-semibold text-center rounded-[100px] ${className}`}
      >
        Terkirim
      </p>
    );
  } else if (risk == "SCHEDULED") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FFF2B0] text-[#736000] font-semibold text-center rounded-[100px] ${className}`}
      >
        Dijadwalkan
      </p>
    );
  } else if (risk == "FAILED") {
    return (
      <p
        className={`py-1 w-[90%] bg-[#FCC0CF] text-[#6F182D] font-semibold text-center rounded-[100px] ${className}`}
      >
        Gagal terkirim
      </p>
    );
  }
}

export default RiskCurveBox;
