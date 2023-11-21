"use client";
import ResponseTimeTable from "@/components/tables/ResponseTimeTable";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, ChangeEvent } from "react";
import { getAllNotificationLog, getResponseTimeReports } from "@/utils/fetch";
import { NotificationLog } from "@/type";
import FilterDataPeserta from "@/components/FilterDataPeserta";
import ButtonBlue from "@/components/buttons/ButtonBlue";

function ResponseTimeLog() {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);

  const [notificationLogs, setNotificationLogs] = useState<
    NotificationLog[] | null
  >(null);
  const [name, setName] = useState<string>("");
  const [group, setGroup] = useState<string>("");
  const [subGroup, setSubGroup] = useState<string>("");
  const [showFilterDataResponseTimeLog, setShowFilterDataResponseTimeLog] =
    useState<boolean>(false);
  const [filename, setFilename] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  const filterDataClick = () => {
    setShowFilterDataResponseTimeLog(true);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const prevPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPage(() => (page == 1 ? 1 : page - 1));
  };

  const nextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPage(page + 1);
  };

  const downloadFile = () => {
    getResponseTimeReports(group, subGroup)
      .then((res) => res.blob())
      .then((resBlob) => {
        const filename =
          `Response Time Log${group != "" ? "_" + group : "_" + "All"}${
            subGroup != "" ? "_" + subGroup : ""
          }` + ".xlsx";
        const file = new File([resBlob], filename);
        window.open(URL.createObjectURL(file), "_blank");
      });
  };

  useEffect(() => {
    console.log("filter changed");
    setFilename(
      `Response Time Log${group != "" ? "_" + group : "_" + "All"}${
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
      }

      getAllNotificationLog(page)
        .then((res) => res.json())
        .then((resJson) => {
          let logs: NotificationLog[] = resJson.logs;
          console.log(logs);

          if (name != "") {
            logs = logs.filter((log) => log.name.includes(name));
          }
          if (group != "") {
            logs = logs.filter((log) => log.group == group);
          }
          if (subGroup != "") {
            logs = logs.filter((log) => log.subGroup == parseInt(subGroup));
          }

          setNotificationLogs(logs);
        });

      getResponseTimeReports(group, subGroup)
        .then((res) => res.blob())
        .then((resBlob) => setFileURL(URL.createObjectURL(resBlob)));
    });
  }, [name, group, subGroup, page]);

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

            {notificationLogs && notificationLogs.length > 0
              ? notificationLogs.map((notification, index) => {
                  return (
                    <ResponseTimeTable
                      id={notification.id}
                      date={new Date(notification.sentAt)}
                      group={notification.group}
                      name={notification.name}
                      sentAt={notification.sentAt}
                      respondedAt={notification.respondedAt}
                      subGroup={notification.subGroup}
                      key={index}
                    />
                  );
                })
              : null}
          </div>
        </div>

        {showFilterDataResponseTimeLog ? (
          <FilterDataPeserta
            setShowFilterDataPeserta={setShowFilterDataResponseTimeLog}
            group={group}
            setGroup={setGroup}
            subGroup={subGroup}
            setSubGroup={setSubGroup}
          />
        ) : null}

        <div className="fixed flex gap-1 items-center bottom-4 left-[50%] translate-x-[-50%] bg-white p-3 rounded-lg border shadow">
          <ButtonBlue
            buttonText="Prev page"
            onClick={prevPage}
          />
          <p>Page {page}</p>
          <ButtonBlue
            buttonText="Next page"
            onClick={nextPage}
          />
        </div>
      </main>
    );
  }
}

export default ResponseTimeLog;
