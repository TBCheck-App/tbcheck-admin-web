import ButtonBlue from "@/components/buttons/ButtonBlue";
import React from "react";
import Image from "next/image";

interface Props {
  goToCalendar: () => void;
}

function ChooseGroupSection({ goToCalendar }: Props) {
  return (
    <div className="px-4 flex flex-col gap-6">
      <div className="flex flex-col gap-3 justify-between items-center">
        <Image
          src="/daily-checkup-report.svg"
          alt=""
          width={60}
          height={60}
        />
        <h1 className="font-bold text-2xl">History Daily Check Up</h1>
      </div>

      <h2 className="font-bold text-xl text-center">Pilih Grup</h2>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold">
          Pilih Group<span className="text-[#F63564]">*</span>
        </h3>
        <select className="border w-full px-3 py-2 rounded-md">
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
        <h3 className="font-bold">
          Pilih Sub-group<span className="text-[#F63564]">*</span>
        </h3>
        <select className="border w-full px-3 py-2 rounded-md">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>

      <ButtonBlue
        buttonText="Lihat History"
        onClick={goToCalendar}
      />
    </div>
  );
}

export default ChooseGroupSection;
