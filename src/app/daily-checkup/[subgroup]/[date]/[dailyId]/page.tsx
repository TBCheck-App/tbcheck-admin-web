"use client";
import RadioButton from "@/components/RadioButton";
import RiskBox from "@/components/RiskBox";
import ButtonBack from "@/components/buttons/ButtonBack";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  params: {
    subgroup: string;
    date: string;
  };
}

function DailyCheckUpDetail({ params }: Props) {
  const [render, setRender] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("signin");
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
            <h1 className="font-bold text-2xl">Azmi Rahmadisha</h1>
            <p>Kamis, 24 Juli 2023</p>
            <p>14:00:00 WIB</p>
          </div>

          <RiskBox risk="HIGH_RISK" />

          <div className="flex flex-col gap-2">
            <p className="font-bold">
              Apakah hari ini anda menggunakan masker?
            </p>
            <RadioButton
              text="Ya"
              checked
            />
            <RadioButton text="Tidak" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">
              Apakah hari ini Anda menggunakan transportasi umum?
            </p>
            <RadioButton
              text="Ya"
              checked
            />
            <RadioButton text="Tidak" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">
              Apakah hari ini Anda mengikuti kegiatan yang melibatkan orang
              banyak ({">"} 20 orang)?
            </p>
            <RadioButton
              text="Ya"
              checked
            />
            <RadioButton text="Tidak" />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">
              Apakah hari ini Anda saat ini mengalami demam/batuk/pilek/sakit
              tenggorokan/sesak?
            </p>
            <RadioButton
              text="Ya"
              checked
            />
            <RadioButton text="Tidak" />
          </div>
        </div>
      </main>
    );
  }
}

export default DailyCheckUpDetail;
