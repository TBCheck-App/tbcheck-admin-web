import { DataPeserta } from "@/type";
import React from "react";

interface Props {
  peserta: DataPeserta;
  index: number;
}

function PesertaTable({ peserta, index }: Props) {
  let ageString = "";
  switch (peserta.age) {
    case "UNDER_18":
      ageString = "Dibawah 18 Tahun";
      break;
    case "BETWEEN_18_24":
      ageString = "18-24 Tahun";
      break;
    case "OVER_24":
      ageString = "Diatas 24 Tahun";
      break;
  }

  return (
    <div
      key={index}
      className="text-xs border-t flex flex-row justify-between px-2 py-3"
    >
      <div className="w-[55px]">
        <p className="text-center">{peserta.group}</p>
      </div>
      <div className="w-[63px]">
        <p className="text-center">
          {peserta.group}
          {peserta.subGroup}
        </p>
      </div>
      <div className="w-[81px]">
        <a
          href={`/data-peserta/${peserta.id}`}
          className="font-semibold text-[#5497F6] cursor-pointer"
        >
          {peserta.name}
        </a>
      </div>
      <div className="w-[85px]">
        <p className="text-center">{ageString}</p>
      </div>
    </div>
  );
}

export default PesertaTable;
