import React, { ChangeEvent } from "react";
import Backdrop from "./Backdrop";
import Image from "next/image";

interface Props {
  setShowFilterDataPeserta: React.Dispatch<React.SetStateAction<boolean>>;
  group: string;
  setGroup: React.Dispatch<React.SetStateAction<string>>;
  subGroup: string;
  setSubGroup: React.Dispatch<React.SetStateAction<string>>;
}

function FilterDataPeserta({
  setShowFilterDataPeserta,
  group,
  setGroup,
  subGroup,
  setSubGroup,
}: Props) {
  const removeClick = () => {
    setShowFilterDataPeserta(false);
  };

  const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroup(event.target.value);
  };

  const handleChangeSubGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubGroup(event.target.value);
  };

  const resetFilter = () => {
    setGroup("");
    setSubGroup("");
  };

  return (
    <div>
      <Backdrop setShowState={setShowFilterDataPeserta} />

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[350px] flex flex-col gap-3">
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
          <select
            className="border w-full px-3 py-2 rounded-md"
            value={group}
            onChange={handleChangeGroup}
          >
            <option value="">Semua</option>
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
          <select
            className="border w-full px-3 py-2 rounded-md"
            value={subGroup}
            onChange={handleChangeSubGroup}
          >
            <option value="">Semua</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="flex gap-4 justify-end">
          <button
            className="flex flex-row px-4 py-3 gap-4"
            onClick={resetFilter}
          >
            <Image
              src="/arrow-path.svg"
              alt=""
              width={20}
              height={20}
            />
            <p className="text-sm text-[#5497F6]">Reset</p>
          </button>
          <button
            className="text-white bg-[#5497F6] text-sm px-4 py-3 rounded-md"
            onClick={removeClick}
          >
            Terapkan
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterDataPeserta;
