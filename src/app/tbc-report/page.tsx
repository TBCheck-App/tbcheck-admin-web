"use client";
import TBCReportTable from "@/components/tables/TBCReportTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getAllTBReport } from "@/utils/fetch";

function TBCReport() {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);
  const [tBlist, setTBList] = useState<null>(null);

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("/signin");
      }

      // PUT FETCH AFTER if (res == false)
      getAllTBReport()
        .then((res) => res.json())
        .then((resJson) => setTBList(resJson.reports))
        .catch((err) => alert(err));
    });
  }, []);

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
                />
              </div>

              <button>
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

            <TBCReportTable />
            <TBCReportTable />
            <TBCReportTable />
          </div>
        </div>
      </main>
    );
  }
}

export default TBCReport;
