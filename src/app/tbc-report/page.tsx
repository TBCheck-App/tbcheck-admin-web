"use client";
import TBCReportTable from "@/components/tables/TBCReportTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { getAllTBReport, getTBCReports } from "@/utils/fetch";
import { TBUserReport } from "@/type";
import FilterDataPeserta from "@/components/FilterDataPeserta";

function TBCReport() {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);
  const [tBlist, setTBList] = useState<null | TBUserReport[]>(null);
  const [search, setSearch] = useState<string>("");

  const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
  const [group, setGroup] = useState<string>("");
  const [subGroup, setSubGroup] = useState<string>("");
  const [filename, setFilename] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");

  const getTbReport = async () => {
    try {
      const res = await getAllTBReport(search, group, subGroup);
      const resJson = await res.json();
      setTBList(resJson.reports);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const downloadFile = () => {
    getTBCReports(group, subGroup)
      .then((res) => res.blob())
      .then((resBlob) => window.open(URL.createObjectURL(resBlob), "_blank"));
  };

  useEffect(() => {
    console.log("filter changed");
    setFilename(
      `Laporan TBC${group != "" ? "_" + group : "_" + "All"}${
        subGroup != "" ? "_" + subGroup : ""
      }` + ".xlsx"
    );
    setFileURL("");
  }, [group, subGroup]);

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("/signin");
        return;
      }

      // PUT FETCH AFTER if (res == false)
      getTbReport();

      getTBCReports(group, subGroup)
        .then((res) => res.blob())
        .then((resBlob) => setFileURL(URL.createObjectURL(resBlob)));
    });
  }, [group, subGroup, search]);

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
          <div className="flex flex-col items-center gap-3">
            <Image
              src="/laporan-tbc.svg"
              alt=""
              width={60}
              height={60}
            />

            <h1 className="font-bold text-2xl">Laporan Kasus TBC</h1>
          </div>

          <ButtonOutlined
            icons="/download.svg"
            text="Unduh Riwayat Laporan"
            filename={filename}
            fileURL={fileURL}
          />

          <div className="border rounded">
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />
              </div>

              <button onClick={() => setShowFilterModal(true)}>
                <Image
                  src="/funnel.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
            </header>

            <div
              id="tbc-report-columns"
              className="text-xs font-semibold grid text-center h-14 border-t grid-tbc-table"
            >
              <div className="flex flex-row justify-center items-center p-2">
                <Image
                  src="/bars-arrow-down.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <p>Tanggal Laporan</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Group</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Nama Peserta</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Asal Universitas</p>
              </div>
            </div>

            {tBlist &&
              tBlist.map((tbreport) => (
                <TBCReportTable
                  dateStr={tbreport.reportedAt}
                  name={tbreport.name}
                  university={tbreport.university}
                  userClass={tbreport.group}
                  id={tbreport.id}
                  key={tbreport.id}
                />
              ))}
          </div>
        </div>
        {showFilterModal && (
          <FilterDataPeserta
            setShowFilterDataPeserta={setShowFilterModal}
            group={group}
            setGroup={setGroup}
            setSubGroup={setSubGroup}
            subGroup={subGroup}
          />
        )}
      </main>
    );
  }
}

export default TBCReport;
