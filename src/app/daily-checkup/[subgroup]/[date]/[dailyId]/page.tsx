"use client";
import RadioButton from "@/components/RadioButton";
import RiskBox from "@/components/RiskBox";
import ButtonBack from "@/components/buttons/ButtonBack";
import { dayNames, groupList, monthNames } from "@/config/var";
import { DailyDetail, DetailPeserta } from "@/type";
import { tokenIsValid } from "@/utils/auth";
import { getDetailDailyCheckup, getUserDetail } from "@/utils/fetch";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    subgroup: string;
    date: string;
    dailyId: string;
  };
}

function DailyCheckUpDetail({ params }: Props) {
  const [detail, setDetail] = useState<DailyDetail | null>(null);
  const [user, setUser] = useState<DetailPeserta | null>(null);
  const [dailyDate, setDailyDate] = useState<Date | null>(null);

  const [render, setRender] = useState<boolean>(false);
  const router = useRouter();

  if (params.subgroup.length <= 2 && groupList.includes(params.subgroup)) {
    useEffect(() => {
      tokenIsValid().then((res) => {
        setRender(res);

        if (res == false) {
          router.push("signin");
        } else {
          getDetailDailyCheckup(params.dailyId)
            .then((res) => res.json())
            .then((resJson) => {
              setDetail(resJson.dailyReport);
              setDailyDate(new Date(resJson.dailyReport.reportedAt));
              getUserDetail(resJson.dailyReport.userId)
                .then((res) => res.json())
                .then((resJson) => setUser(resJson.user));
            });
        }
      });
    }, []);

    if (render) {
      return (
        <main className="flex flex-col gap-8">
          <div className="px-4">
            <ButtonBack
              buttonText="Kembali"
              destPage={`/daily-checkup/${params.subgroup}/${params.date}`}
            />
          </div>

          <div className="mx-5 flex flex-col gap-6">
            <div className="flex justify-center items-center flex-col gap-2">
              <h1 className="font-bold text-2xl">{user?.name}</h1>
              {dailyDate ? (
                <p>
                  {dayNames[dailyDate.getDay()]}, {dailyDate.getDate()}{" "}
                  {monthNames[dailyDate.getMonth()]} {dailyDate.getFullYear()}
                </p>
              ) : null}
              {dailyDate ? (
                <p>
                  {dailyDate.getHours()}:{dailyDate.getMinutes()}:
                  {dailyDate.getSeconds()}
                </p>
              ) : null}
            </div>

            {detail ? <RiskBox risk={detail.result} /> : null}

            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Apakah hari ini anda menggunakan masker?
              </p>
              <RadioButton
                text="Ya"
                checked={detail?.isUsingMask}
              />
              <RadioButton
                text="Tidak"
                checked={!detail?.isUsingMask}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Apakah hari ini Anda menggunakan transportasi umum?
              </p>
              <RadioButton
                text="Ya"
                checked={detail?.isUsingPublicTransport}
              />
              <RadioButton
                text="Tidak"
                checked={!detail?.isUsingPublicTransport}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Apakah hari ini Anda mengikuti kegiatan yang melibatkan orang
                banyak ({">"} 20 orang)?
              </p>
              <RadioButton
                text="Ya"
                checked={detail?.isAttendingLargeGathering}
              />
              <RadioButton
                text="Tidak"
                checked={!detail?.isAttendingLargeGathering}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold">
                Apakah hari ini Anda saat ini mengalami demam/batuk/pilek/sakit
                tenggorokan/sesak?
              </p>
              <RadioButton
                text="Ya"
                checked={detail?.isExperiencingSymptoms}
              />
              <RadioButton
                text="Tidak"
                checked={!detail?.isExperiencingSymptoms}
              />
            </div>
          </div>
        </main>
      );
    }
  } else {
    redirect("/daily-checkup");
  }
}

export default DailyCheckUpDetail;
