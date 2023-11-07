"use client";
import ScreeningTable from "@/components/tables/ScreeningTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getAllScreening, getScreeningReports } from "@/utils/fetch";
import { DataScreening } from "@/type";
import FilterDataPeserta from "@/components/FilterDataPeserta";

function Screening() {
  const [dataScreening, setDataScreening] = useState<DataScreening[] | null>(
    null
  );
  const [name, setName] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);
  const [showFilterDataScreening, setShowFilterDataScreening] =
    useState<boolean>(false);
  const [group, setGroup] = useState<string>("");
  const [subGroup, setSubGroup] = useState<string>("");

  const router = useRouter();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const filterDataClick = () => {
    setShowFilterDataScreening(true);
  };

  const downloadFile = () => {
    getScreeningReports()
      .then((res) => res.blob())
      .then((resBlob) => {
        const filename =
          `Screening${group != "" ? "_" + group : "_" + "All"}${
            subGroup != "" ? "_" + subGroup : ""
          }` + ".xlsx";
        const file = new File([resBlob], filename);
        window.open(URL.createObjectURL(file), "_blank");
      });
  };

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      getAllScreening(name, group, subGroup)
        .then((res) => res.json())
        .then((resJson) => setDataScreening(resJson.screenings))
        .catch((error) =>
          alert(`There was a problem with the fetch operation: ${error}`)
        );

      if (res == false) {
        router.push("/signin");
      }
    });
  }, [name, group, subGroup]);

  if (render) {
    return (
      <main className="flex flex-col gap-8">
        <div className="px-4">
          <ButtonBack
            buttonText="Home"
            destPage="/"
          />
        </div>

        <div className="mx-5 flex flex-col gap-6">
          <div className="flex flex-col items-center justify-between gap-3">
            <Image
              src="/skrining-report.svg"
              alt=""
              width={60}
              height={60}
            />
            <h1 className="font-bold text-2xl">Laporan Skrining</h1>
          </div>

          <ButtonOutlined
            icons="/download.svg"
            text="Unduh Riwayat Laporan"
            onClick={downloadFile}
          />

          <div
            id="tables"
            className="border rounded text-xs"
          >
            <header className="flex flex-row p-4 gap-4">
              <div className="rounded-[32px] flex flex-row gap-1 border py-3 px-2 w-[286px]">
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
                  value={name}
                  onChange={handleChangeSearch}
                />
              </div>

              <button onClick={filterDataClick}>
                <Image
                  src="/funnel.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
            </header>

            <div className="font-semibold grid grid-screening-table text-center">
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
                <p>Group</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Nama Peserta</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Hasil Skrining</p>
              </div>
            </div>

            {dataScreening
              ? dataScreening.map((screening, index) => {
                  return (
                    <ScreeningTable
                      key={index}
                      id={screening.id}
                      dateString={screening.createdAt}
                      group={screening.group}
                      name={screening.name}
                      risk={screening.result}
                    />
                  );
                })
              : null}
          </div>
        </div>

        {showFilterDataScreening ? (
          <FilterDataPeserta
            setShowFilterDataPeserta={setShowFilterDataScreening}
            group={group}
            setGroup={setGroup}
            subGroup={subGroup}
            setSubGroup={setSubGroup}
          />
        ) : null}
      </main>
    );
  }
}

export default Screening;
