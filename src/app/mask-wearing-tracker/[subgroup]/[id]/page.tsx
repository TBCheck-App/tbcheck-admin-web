"use client";
import { dayNames, groupList, monthNames } from "@/config/var";
import { tokenIsValid } from "@/utils/auth";
import { redirect, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import MWTCard from "@/components/MWTCard";
import { getAllMWTHistory, getDetailMWTHistory } from "@/utils/fetch";
import { MWTHistoryLog, MWTHistoryLogDetail } from "@/type";

interface Props {
  params: {
    subgroup: string;
    id: string;
  };
}

const MaskWearingTrackerSubGroup = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(false);

  const [name, setName] = useState<string>("");

  const router = useRouter();

  const [mwtLog, setMwtLog] = useState<MWTHistoryLogDetail | null>(null);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const showFilteredUser = () => {
    if (!mwtLog) {
      return null;
    }

    return mwtLog.answers
      .filter((answer) => {
        const lowerCaseName = answer.user.name.toLowerCase();
        return lowerCaseName.includes(name);
      })
      .map((answer, index) => {
        return (
          <div
            className={`border-t grid text-center ${
              mwtLog.withEnforcement
                ? "grid-mwt-table-enforcement"
                : "grid-mwt-table-no-enforcement"
            }`}
            key={index}
          >
            <div className="flex flex-row gap-1 py-3 px-2 items-center">
              <p className="text-xs font-semibold h-fit text-left">
                {answer.user.name}
              </p>
            </div>

            <div className="text-xs font-semibold px-2 py-3 flex justify-center items-center">
              {answer.isUseMask == "YES" ? (
                <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
                  <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
              )}
            </div>

            {mwtLog.withEnforcement ? (
              <div className="text-xs font-semibold px-2 py-3 flex justify-center items-center">
                {answer.isUseMask == "WITH_ENFORCEMENT" ? (
                  <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
                    <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                  </div>
                ) : (
                  <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
                )}
              </div>
            ) : null}

            <div className="text-xs font-semibold px-2 py-3 flex justify-center items-center">
              {answer.isUseMask == "NO" ? (
                <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
                  <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
              )}
            </div>
          </div>
        );
      });
  };

  const showUnfilteredUser = () => {
    if (!mwtLog) {
      return null;
    }

    return mwtLog.answers.map((answer, index) => {
      return (
        <div
          className={`border-t grid text-center ${
            mwtLog.withEnforcement
              ? "grid-mwt-table-enforcement"
              : "grid-mwt-table-no-enforcement"
          }`}
          key={index}
        >
          <div className="flex flex-row gap-1 py-3 px-2 items-center">
            <p className="text-xs font-semibold h-fit text-left">
              {answer.user.name}
            </p>
          </div>

          <div className="text-xs font-semibold px-2 py-3 flex justify-center items-center">
            {answer.isUseMask == "YES" ? (
              <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              </div>
            ) : (
              <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
            )}
          </div>

          {mwtLog.withEnforcement ? (
            <div className="text-xs font-semibold px-2 py-3 flex justify-center items-center">
              {answer.isUseMask == "WITH_ENFORCEMENT" ? (
                <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
                  <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
              )}
            </div>
          ) : null}

          <div className="text-xs font-semibold px-2 py-3 flex justify-center items-center">
            {answer.isUseMask == "NO" ? (
              <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
                <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
              </div>
            ) : (
              <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
            )}
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
      tokenIsValid().then((res) => {
        setRender(res);
        setIsLoading(false);
      });

      getDetailMWTHistory(params.id)
        .then((res) => res.json())
        .then((resJson) => {
          setMwtLog(resJson.history);
          console.log(resJson.history);
        });
    }
  }, []);

  if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
    if (isLoading || mwtLog == null) {
      return <h1>Loading...</h1>;
    }

    if (render && !isLoading) {
      const currentDate = new Date(mwtLog.date);
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
              destPage={`/mask-wearing-tracker/${params.subgroup}`}
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
                  <p className="font-bold">Ya</p>
                  <p>{mwtLog.numberOfAnswer.yes} Orang</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Ya, setelah dihimbau</p>
                  <p>{mwtLog.numberOfAnswer.withEnforcement} Orang</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p className="font-bold">Tidak</p>
                  <p>{mwtLog.numberOfAnswer.no} Orang</p>
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
                  onChange={handleChangeSearch}
                />
              </div>
            </header>

            <div
              id="columns"
              className={`border-t grid text-center ${
                mwtLog.withEnforcement
                  ? "grid-mwt-table-enforcement"
                  : "grid-mwt-table-no-enforcement"
              }`}
            >
              <div className="flex flex-row gap-1 py-3 px-2 items-center">
                <p className="text-xs font-semibold h-fit">Nama Peserta</p>
              </div>
              <div className="flex flex-row items-center justify-center text-xs font-semibold px-2 py-3">
                <p>Ya</p>
              </div>
              {mwtLog.withEnforcement ? (
                <div className="flex flex-row items-center justify-center text-xs font-semibold px-2 py-3">
                  <p>Ya, setelah dihimbau</p>
                </div>
              ) : null}
              <div className="flex flex-row items-center justify-center text-xs font-semibold px-2 py-3">
                <p>Tidak</p>
              </div>
            </div>

            {name != "" ? showFilteredUser() : showUnfilteredUser()}
          </div>
        </main>
      );
    }
    if (!render && !isLoading) {
      router.push("signin");
    }
  } else {
    redirect("/mask-wearing-tracker");
  }
};

export default MaskWearingTrackerSubGroup;
