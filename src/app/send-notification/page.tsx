"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import { tokenIsValid } from "@/utils/auth";
import {
  getAllNotifications,
  getAllUser,
  getNotificationSchedulesReports,
} from "@/utils/fetch";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { useRouter } from "next/navigation";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import { NotificationSchedule } from "@/type";
import NotificationScheduleTable from "@/components/tables/NotificationScheduleTable";

const SendNotificationPage = () => {
  const [render, setRender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [schedulesData, setSchedulesData] = useState<
    NotificationSchedule[] | null
  >(null);
  const [filename, setFilename] = useState<string>(`Notification History.xlsx`);
  const [fileURL, setFileURL] = useState<string>("");

  const router = useRouter();

  const downloadFile = () => {
    getNotificationSchedulesReports()
      .then((res) => res.blob())
      .then((resBlob) => {
        const filename = `Notification History.xlsx`;
        const file = new File([resBlob], filename);
        window.open(URL.createObjectURL(file), "_blank");
      });
  };

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      setIsLoading(false);

      if (res) {
        getAllNotifications()
          .then((res) => res.json())
          .then((resJson) => {
            console.log(resJson.schedules);
            setSchedulesData(resJson.schedules);
          });

        getNotificationSchedulesReports()
          .then((res) => res.blob())
          .then((resBlob) => setFileURL(URL.createObjectURL(resBlob)));
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
                className="px-4 flex-1"
                filename={filename}
                fileURL={fileURL}
              />
              {/* <ButtonBlue
                icons="/plus.svg"
                buttonText="Notifikasi Baru"
                className="flex-1"
                onClick={() => router.push("/send-notification/create")}
              /> */}
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

            {schedulesData
              ? schedulesData.map((data, index) => (
                  <NotificationScheduleTable
                    data={data}
                    key={index}
                  />
                ))
              : null}
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
