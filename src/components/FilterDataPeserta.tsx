import React from "react";
import Backdrop from "./Backdrop";
import Image from "next/image";

interface Props {
  setShowDataPeserta: React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterDataPeserta({ setShowDataPeserta }: Props) {
  const removeClick = () => {
    setShowDataPeserta(false);
  };

  return (
    <div>
      <Backdrop setShowState={setShowDataPeserta} />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[350px] flex flex-col gap-3">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-xl">Filter Data</h1>
          <button onClick={removeClick}>
            <Image
              src="/x-mark.svg"
              alt=""
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="flex flex-row font-bold">
            Pilih Group<p className="text-[#F63564]">*</p>
          </h2>
          <select className="border w-full px-3 py-2 rounded-md">
            <option value="Semua">Semua</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="flex flex-row font-bold">
            Pilih Sub-group<p className="text-[#F63564]">*</p>
          </h2>
          <select className="border w-full px-3 py-2 rounded-md">
            <option value="Semua">Semua</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="flex gap-4 justify-end">
          <button className="flex flex-row px-4 py-3 gap-4">
            <Image
              src="/arrow-path.svg"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-sm text-[#5497F6]">Reset</p>
          </button>
          <button className="text-white bg-[#5497F6] text-sm px-4 py-3 rounded-md">
            Terapkan
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterDataPeserta;
