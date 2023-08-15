import { DataPeserta } from "@/type";
import React from "react";

interface Props {
  peserta: DataPeserta;
  index: number;
}

function PesertaTable({ peserta, index }: Props) {
  return (
    <div
      key={index}
      className="text-xs border-t flex flex-row justify-between px-2 py-3"
    >
      <div className="w-[55px]">
        <p className="text-center">{peserta.group}</p>
      </div>
      <div className="w-[63px]">
        <p className="text-center">{peserta.subgroup}</p>
      </div>
      <div className="w-[81px]">
        <a className="font-semibold text-[#5497F6] cursor-pointer">
          {peserta.nama}
        </a>
      </div>
      <div className="w-[85px]">
        <p className="text-center">{peserta.usia}</p>
      </div>
    </div>
  );
}

export default PesertaTable;
