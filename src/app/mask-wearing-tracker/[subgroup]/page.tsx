"use client";
import { groupList } from "@/config/var";
import { tokenIsValid } from "@/utils/auth";
import { redirect, useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import MWTCard from "@/components/MWTCard";
import { getAllMWTHistory, getMWTReports } from "@/utils/fetch";
import { MWTHistoryLog } from "@/type";

interface Props {
  params: {
    subgroup: string;
  };
}

const MaskWearingTrackerSubGroup = ({ params }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(false);
  const router = useRouter();

  const [mwtLogs, setMwtLogs] = useState<MWTHistoryLog[] | null>(null);

  const group = params.subgroup[0];
  const subGroup = params.subgroup[1];

  const downloadFile = () => {
    getMWTReports()
      .then((res) => res.blob())
      .then((resBlob) => window.open(URL.createObjectURL(resBlob), "_blank"));
  };

  useEffect(() => {
    if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
      tokenIsValid().then((res) => {
        setRender(res);
        setIsLoading(false);
      });

      getAllMWTHistory(group, subGroup)
        .then((res) => res.json())
        .then((resJson) => setMwtLogs(resJson.histories));
    }
  }, []);

  if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (render && !isLoading) {
      return (
        <main className="flex flex-col gap-8">
          <div className="px-4">
            <ButtonBack
              buttonText="Home"
              destPage="/mask-wearing-tracker"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 items-center justify-between">
              <Image
                src="/mwt.svg"
                alt=""
                width={60}
                height={60}
              />
              <h1 className="font-bold text-2xl">
                History Mask Wearing Tracker
              </h1>

              <h2 className="font-bold text-xl">
                Sub-group {group}
                {subGroup}
              </h2>
            </div>

            <div className="mx-5">
              <ButtonOutlined
                icons="/download.svg"
                text="Data Peserta"
                onClick={downloadFile}
              />
            </div>

            <div className="mx-5 flex flex-col gap-6">
              {mwtLogs?.map((log, index) => {
                return (
                  <MWTCard
                    key={index}
                    mwtLog={log}
                  />
                );
              })}
            </div>
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
