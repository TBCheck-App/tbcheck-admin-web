import React from "react";
import Image from "next/image";
import { Risk } from "@/type";

interface Props {
  risk: Risk;
}

function RiskBox({ risk }: Props) {
  if (risk == "HIGH_RISK") {
    return (
      <div className="bg-[#FEE1E8] w-full flex flex-row justify-center items-center py-4 rounded-lg gap-6">
        <Image
          src="/exclamation-circle.svg"
          alt=""
          width={36}
          height={36}
        />
        <p className="font-bold">Berisiko Tinggi</p>
      </div>
    );
  } else if (risk == "MEDIUM_RISK") {
    return (
      <div className="bg-[#FFF2B0] w-full flex flex-row justify-center items-center py-4 rounded-lg gap-6">
        <Image
          src="/exclamation-triangle.svg"
          alt=""
          width={36}
          height={36}
        />
        <p className="font-bold">Berisiko</p>
      </div>
    );
  } else if (risk == "LOW_RISK") {
    return (
      <div className="bg-[#E7F7F6] w-full flex flex-row justify-center items-center py-4 rounded-lg gap-6">
        <Image
          src="/shield-check.svg"
          alt=""
          width={36}
          height={36}
        />
        <p className="font-bold">Berisiko Rendah</p>
      </div>
    );
  }
}

export default RiskBox;
