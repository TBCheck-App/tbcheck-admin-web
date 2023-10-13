"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ButtonBack from "@/components/buttons/ButtonBack";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import { getDetailNotificationLog } from "@/utils/fetch";
import { DetailNotificationLog } from "@/type";

interface Props {
  params: {
    logId: string;
  };
}

function ResponseTimeLogDetail({ params }: Props) {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);
  const [logDetail, setLogDetail] = useState<DetailNotificationLog | null>(
    null
  );

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("/signin");
      }
      getDetailNotificationLog(params.logId)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Cannot get log detail.");
          }
          return res.json();
        })
        .then((resJson) => {
          console.log(resJson);
          setLogDetail(resJson.log);
        })
        .catch((err) => alert(err));
    });
  }, []);

  if (render) {
    return (
      <main className="flex flex-col gap-5">
        <div className="px-4">
          <ButtonBack
            buttonText="Kembali"
            destPage={`/response-time-log`}
          />
        </div>

        <div className="mx-5 flex flex-col gap-[38px]">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl">Detail Log</h1>
          </div>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Nama Lengkap</h2>
              <div className="flex justify-between items-center">
                <p>{logDetail ? logDetail.name : null}</p>
                <a
                  href={logDetail ? `data-peserta/${logDetail.userId}` : ""}
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
              <h2 className="font-bold">Group</h2>
              <p>{logDetail ? logDetail.group : null}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Sub-Group</h2>
              <p>{logDetail ? logDetail.subGroup : null}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Hari, Tanggal Respon</h2>
              <p>{logDetail ? logDetail.respondedAt : null}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Waktu Respon</h2>
              <p>{logDetail ? logDetail.respondedAt : null}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Jeda Respon dari Notifikasi</h2>
              <p>NULL</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Variasi Desain Notifikasi</h2>
              <p>Variasi {logDetail ? logDetail.variant : null}</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-bold text-[#546881]">Hasil Jawaban Pertanyaan</p>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">
                Menurut Anda, seberapa penting Anda harus menggunakan masker?
              </h2>
              <p>{logDetail ? logDetail.isMaskImportant : null}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">
                Menurut Anda, seberapa besar kepedulian Anda untuk menggunakan
                masker?
              </h2>
              <p>{logDetail ? logDetail.isMaskCare : null}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ResponseTimeLogDetail;
