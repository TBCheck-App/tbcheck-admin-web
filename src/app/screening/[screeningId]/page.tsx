"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RiskCurveBox from "@/components/RiskCurveBox";

function ScreeningDetail() {
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
      <main className="flex flex-col gap-5">
        <div className="px-4">
          <ButtonBack
            buttonText="Kembali"
            destPage="/screening"
          />
        </div>

        <div className="mx-5 flex flex-col gap-6">
          <div>
            <h1 className="font-bold text-2xl text-center">Detail Skrining</h1>
          </div>

          <ButtonOutlined
            icons="/download.svg"
            text="Unduh Detail Skrining"
          />

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Nama Lengkap</h2>
              <div className="flex justify-between items-center">
                <p>Azmi Ramadisha</p>
                <a
                  href=""
                  className="text-sm font-medium text-[#5497F6] flex flex-row gap-4"
                >
                  <p>Lihat data peserta</p>
                  <Image
                    src="/pencil-square.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Hari, Tanggal Respon</h2>
              <p>Rabu, 26/07/2023</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Group</h2>
              <p>A</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Sub-Group</h2>
              <p>A1</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Asal Universitas</h2>
              <p>Universitas Indonesia</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Hasil Skrining</h2>
              <RiskCurveBox
                risk="HIGH_RISK"
                className="w-fit h-fit text-xs py-2 px-4"
              />
            </div>
          </div>

          <div>
            <p className="font-bold text-[#546881]">Hasil Jawaban Pertanyaan</p>
          </div>
        </div>
      </main>
    );
  }
}

export default ScreeningDetail;
