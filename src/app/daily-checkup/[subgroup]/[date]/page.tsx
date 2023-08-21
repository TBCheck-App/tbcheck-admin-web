import DailyCheckupTable from "@/components/DailyCheckupTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
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

      <div className="flex flex-col gap-6 mx-5">
        <div className="flex flex-col items-center gap-3">
          <h1 className="font-bold text-2xl">History</h1>
          <h2 className="font-bold text-xl">Sub-group G1</h2>
          <p>Kamis, 24 Juli 2023</p>
        </div>

        <div className="bg-[#FCFDEE] p-3 flex flex-col gap-2">
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

        <ButtonOutlined
          icons="/download.svg"
          text="Unduh Riwayat"
        />

        <div className="border rounded">
          <header className="flex flex-row p-4 gap-4">
            <div className="rounded-[32px] flex flex-row gap-1 border py-3 px-2 w-full">
              <Image
                src="/magnifying-glass.svg"
                alt=""
                width={16}
                height={16}
              />
              <input
                type="text"
                className="focus:outline-none text-xs"
                placeholder="Search"
              />
            </div>
          </header>

          <div
            id="daily-checkup-columns"
            className="text-xs font-semibold grid text-center h-14 border-t grid-daily-checkup-table"
          >
            <div className="flex flex-row justify-center items-center p-2">
              <Image
                src="/bars-arrow-down.svg"
                alt=""
                width={16}
                height={16}
              />
              <p>Waktu Check Up</p>
            </div>
            <div className="flex justify-center items-center p-2">
              <p>Nama Peserta</p>
            </div>
            <div className="flex justify-center items-center p-2">
              <p>Hasil Check Up</p>
            </div>
          </div>

          <DailyCheckupTable risk="HIGH_RISK" />
          <DailyCheckupTable risk="MEDIUM_RISK" />
          <DailyCheckupTable risk="LOW_RISK" />
        </div>
      </div>
    </main>
  );
}

export default DailyCheckUpData;
