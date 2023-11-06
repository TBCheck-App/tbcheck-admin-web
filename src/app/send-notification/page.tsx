"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import { tokenIsValid } from "@/utils/auth";
import { getAllUser } from "@/utils/fetch";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { useRouter } from "next/navigation";
import ButtonBlue from "@/components/buttons/ButtonBlue";

const SendNotificationPage = () => {
  const [render, setRender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      setIsLoading(false);

      if (res) {
      }
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (render && !isLoading) {
    return (
      <main className="flex flex-col gap-8">
        <div className="px-4">
          <ButtonBack
            buttonText="Home"
            destPage="/"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div className="mx-5 flex flex-col gap-6">
            <h1 className="font-bold text-2xl text-center">
              Riwayat Notifikasi Dikirimkan
            </h1>

            <div className="flex gap-2">
              <ButtonOutlined
                icons="/download.svg"
                text="Unduh Riwayat"
                className="w-fit px-4 flex-1"
              />
              <ButtonBlue
                icons="/plus.svg"
                buttonText="Notifikasi Baru"
                className="flex-1"
              />
            </div>
          </div>

          <div
            id="tables"
            className="mx-5 border rounded"
          >
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
              id="columns"
              className="border-t grid grid-notification-table"
            >
              <div className="flex flex-row gap-1 py-3 px-2 items-center">
                <Image
                  src="bars-arrow-down.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <p className="text-xs font-semibold h-fit">
                  Tanggal Dikirimkan
                </p>
              </div>
              <div className="text-xs font-semibold px-2 py-3 flex items-center">
                <p>Jam Dikirimkan</p>
              </div>
              <div className="text-xs font-semibold px-2 py-3 flex items-center">
                <p>Group</p>
              </div>
              <div className="text-xs font-semibold px-2 py-3 flex items-center">
                <p>Status Notifikasi</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!render && !isLoading) {
    router.push("signin");
  }
};

export default SendNotificationPage;
