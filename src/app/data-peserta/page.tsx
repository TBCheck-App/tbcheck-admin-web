import ButtonBack from "@/components/ButtonBack";
import React from "react";
import Image from "next/image";
import ButtonOutlined from "@/components/ButtonOutlined";
import { DataPeserta } from "@/type";
import PesertaTable from "@/components/PesertaTable";

const dataPeserta: DataPeserta[] = [
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
  {
    group: "A",
    subgroup: "A1",
    nama: "Azmi Ramadisha",
    usia: "18-24 Tahun",
  },
];

function DataPeserta() {
  return (
    <main className="flex flex-col gap-8">
      <div className="px-4">
        <ButtonBack
          buttonText="Home"
          destPage="/"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3 items-center justify-between">
          <Image
            src="data-peserta.svg"
            alt=""
            width={60}
            height={60}
          />
          <h1 className="font-bold text-2xl">Data Semua Peserta</h1>
        </div>

        <div className="mx-5">
          <ButtonOutlined />
        </div>

        <div
          id="tables"
          className="mx-5 border rounded"
        >
          <header className="flex flex-row p-4 gap-4">
            <div className="rounded-[32px] flex flex-row gap-1 border py-3 px-2 w-[286px]">
              <Image
                src="magnifying-glass.svg"
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

            <Image
              src="/funnel.svg"
              alt=""
              width={16}
              height={16}
            />
          </header>

          <div
            id="columns"
            className="border-t flex flex-row text-center"
          >
            <div className="flex flex-row gap-1 py-3 px-2 items-center">
              <Image
                src="bars-arrow-down.svg"
                alt=""
                width={16}
                height={16}
              />
              <p className="text-xs font-semibold h-fit">Group</p>
            </div>
            <div className="text-xs font-semibold px-2 py-3">Sub-Group</div>
            <div className="text-xs font-semibold px-2 py-3">Nama Peserta</div>
            <div className="text-xs font-semibold px-2 py-3">Kelompok Usia</div>
          </div>

          {dataPeserta.map((peserta, index) => {
            return (
              <PesertaTable
                peserta={peserta}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default DataPeserta;
