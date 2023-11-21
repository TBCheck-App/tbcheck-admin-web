"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { DataPeserta, Token } from "@/type";
import PesertaTable from "@/components/tables/PesertaTable";
import Backdrop from "@/components/Backdrop";
import FilterDataPeserta from "@/components/FilterDataPeserta";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import apiEndpoints from "@/config/apiEndpoints";
import { getAllUser, getUserData } from "@/utils/fetch";
import ButtonBlue from "@/components/buttons/ButtonBlue";

export default function DataPesertaPage() {
  const [showFilterDataPeserta, setShowFilterDataPeserta] =
    useState<boolean>(false);
  const [dataPeserta, setDataPeserta] = useState<DataPeserta[] | null>(null);
  const [group, setGroup] = useState<string>("");
  const [subGroup, setSubGroup] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filename, setFilename] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  const router = useRouter();

  const filterDataClick = () => {
    setShowFilterDataPeserta(true);
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
    getUserData(group, subGroup)
      .then((res) => res.blob())
      .then((resBlob) => {
        const filename =
          `Data_User${group != "" ? "_" + group : "_" + "All"}${
            subGroup != "" ? "_" + subGroup : ""
          }` + ".xlsx";
        const file = new File([resBlob], filename);
        window.open(URL.createObjectURL(file), "_blank");
      });
  };

  useEffect(() => {
    console.log("filter changed");
    setFilename(
      `Data_User${group != "" ? "_" + group : "_" + "All"}${
        subGroup != "" ? "_" + subGroup : ""
      }` + ".xlsx"
    );
    setFileURL("");
  }, [group, subGroup]);

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      setIsLoading(false);

      if (res) {
        getAllUser(name, group, subGroup, page)
          .then((res) => res.json())
          .then((resJson) => {
            console.log(resJson.users.length);
            setDataPeserta(resJson.users);
          });

        getUserData(group, subGroup)
          .then((res) => res.blob())
          .then((resBlob) => setFileURL(URL.createObjectURL(resBlob)));
      }
    });
  }, [group, subGroup, name, page]);

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
            <ButtonOutlined
              icons="/download.svg"
              text="Data Peserta"
              filename={filename}
              fileURL={fileURL}
            />
          </div>

          <div
            id="tables"
            className="mx-5 border rounded"
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
              <div className="text-xs font-semibold px-2 py-3">
                Nama Peserta
              </div>
              <div className="text-xs font-semibold px-2 py-3">
                Kelompok Usia
              </div>
            </div>

            {dataPeserta
              ? dataPeserta.map((peserta, index) => {
                  return (
                    <PesertaTable
                      key={index}
                      peserta={peserta}
                      index={index}
                    />
                  );
                })
              : null}
          </div>
        </div>
        {showFilterDataPeserta ? (
          <FilterDataPeserta
            setShowFilterDataPeserta={setShowFilterDataPeserta}
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

  if (!render && !isLoading) {
    router.push("signin");
  }
}
