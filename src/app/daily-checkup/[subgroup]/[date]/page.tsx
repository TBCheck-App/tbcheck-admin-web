"use client";
import DailyCheckupTable from "@/components/tables/DailyCheckupTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { dayNames, groupList, monthNames } from "@/config/var";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { tokenIsValid } from "@/utils/auth";
import { getAllDailyCheckup } from "@/utils/fetch";
import { DailyCheckupTableType } from "@/type";

interface Props {
  params: { subgroup: string; date: string };
}

function DailyCheckUpData({ params }: Props) {
  const [highRisk, setHighRisk] = useState<number>(0);
  const [mediumRisk, setMediumRisk] = useState<number>(0);
  const [lowRisk, setLowRisk] = useState<number>(0);
  const [reports, setReports] = useState<DailyCheckupTableType[]>([]);
  const [name, setName] = useState<string>("");

  const [render, setRender] = useState<boolean>(false);
  const router = useRouter();

  const handleChangeDailyCheckupName = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value);
  };

  useEffect(() => {
    if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
      tokenIsValid().then((res) => {
        setRender(res);

        if (res == false) {
          router.push("signin");
        } else {
          const group = params.subgroup.split("")[0];
          const subGroup = parseInt(params.subgroup.split("")[1]);
          const date = new Date(params.date);

          console.log(date.toISOString());

          getAllDailyCheckup(group, subGroup, date.toISOString(), name)
            .then((res) => {
              if (!res.ok) {
                throw new Error("Cannot get data.");
              }
              return res.json();
            })
            .then((resJson) => {
              setHighRisk(resJson.highRisk);
              setMediumRisk(resJson.mediumRisk);
              setLowRisk(resJson.lowRisk);
              setReports(resJson.reports);
            })
            .catch((err) => alert(err));
        }
      });
    }
  }, [name]);

  if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
    if (render) {
      const currentDate = new Date(params.date);
      const stringDate = `${
        dayNames[currentDate.getDay()]
      }, ${currentDate.getDate()} ${
        monthNames[currentDate.getMonth()]
      } ${currentDate.getFullYear()}`;

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
              <h2 className="font-bold text-xl">Sub-group {params.subgroup}</h2>
              <p>{stringDate}</p>
            </div>

            <div className="bg-[#FCFDEE] p-3 flex flex-col gap-2">
              <h3 className="text-[#1C998B] font-bold">Ringkasan</h3>

              <div className="text-sm flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Berisiko Tinggi</p>
                  <p>{highRisk} Orang</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Berisiko</p>
                  <p>{mediumRisk} Orang</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Berisiko Rendah</p>
                  <p>{lowRisk} Orang</p>
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
                    value={name}
                    onChange={handleChangeDailyCheckupName}
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

              {reports && reports.length > 0
                ? reports.map((report, index) => (
                    <DailyCheckupTable
                      data={report}
                      params={params}
                      key={index}
                    />
                  ))
                : null}
            </div>
          </div>
        </main>
      );
    }
  } else {
    redirect("/daily-checkup");
  }
}

export default DailyCheckUpData;
