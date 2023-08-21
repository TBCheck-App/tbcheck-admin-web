"use client";
import ResponseTimeTable from "@/components/ResponseTimeTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function ResponseTimeLog() {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("/signin");
      }
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
          <div className="flex flex-col gap-3 items-center">
            <Image
              src="/response-time-log.svg"
              alt=""
              width={50}
              height={50}
            />
            <h1 className="font-bold text-2xl">Response Time Log</h1>
          </div>

          <ButtonOutlined
            icons="/download.svg"
            text="Unduh Data"
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
              id="daily-checkup-columns"
              className="text-xs font-semibold grid text-center h-14 border-t grid-response-table"
            >
              <div className="flex flex-row justify-center items-center p-2">
                <Image
                  src="/bars-arrow-down.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <p>Tanggal Warning</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Group</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Sub-Group</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Nama Peserta</p>
              </div>
              <div className="flex justify-center items-center p-2">
                <p>Jeda Respon</p>
              </div>
            </div>

            <ResponseTimeTable />
            <ResponseTimeTable />
            <ResponseTimeTable />
          </div>
        </div>
      </main>
    );
  }
}

export default ResponseTimeLog;
