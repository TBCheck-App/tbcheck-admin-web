import ButtonBack from "@/components/buttons/ButtonBack";
import Image from "next/image";
import React from "react";

interface Props {
  params: { subgroup: string; date: string };
}

function DailyCheckUpData({ params }: Props) {
  return (
    <main className="flex flex-col gap-8">
      <div className="px-4">
        <ButtonBack
          buttonText="Kembali"
          destPage={`/daily-checkup/${params.subgroup}`}
        />
      </div>

      <div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold text-2xl">History</h1>
          <h2 className="font-bold text-xl">Sub-group G1</h2>
          <p>Kamis, 24 Juli 2023</p>
        </div>

        <div className="bg-[#FCFDEE] mx-5 p-3 flex flex-col gap-2">
          <h3 className="text-[#1C998B] font-bold">Ringkasan</h3>

          <div className="text-sm flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <p className="font-bold">Berisiko Tinggi</p>
              <p>10 Orang</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold">Berisiko</p>
              <p>100 Orang</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="font-bold">Berisiko Rendah</p>
              <p>100 Orang</p>
            </div>
          </div>

          <div className="flex flex-row justify-end">
            <Image
              src="/notebook.svg"
              alt=""
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DailyCheckUpData;
