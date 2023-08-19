"use client";
import DetailField from "@/components/userDetails/DetailField";
import ButtonBack from "@/components/buttons/ButtonBack";
import { DetailPeserta } from "@/type";
import { tokenIsValid } from "@/utils/auth";
import { getAllUser, getUserDetail } from "@/utils/fetch";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DetailGroupField from "@/components/userDetails/DetailGroupField";

interface Props {
  params: {
    id: string;
  };
}

function PesertaDetail({ params }: Props) {
  const [render, setRender] = useState<boolean>(false);
  const [peserta, setPeserta] = useState<DetailPeserta | null>(null);

  const router = useRouter();

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("/signin");
      } else {
        getUserDetail(params.id)
          .then((res) => res.json())
          .then((resJson) => setPeserta(resJson.user));
      }
    });
  }, []);

  if (render) {
    return (
      <main className="flex flex-col gap-5">
        <div className="px-4">
          <ButtonBack
            buttonText="Kembali"
            destPage="/data-peserta"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-2xl text-center">
              Detail Data Peserta
            </h1>
          </div>

          {peserta ? (
            <div className="px-4 flex flex-col gap-7">
              <DetailField
                field="Nama Lengkap"
                content={peserta.name}
              />
              <DetailField
                field="Kelompok Usia"
                content={peserta.age}
              />
              <DetailField
                field="Jenis Kelamin"
                content={peserta.gender}
              />
              <DetailField
                field="Nomor HP"
                content={peserta.phone}
              />
              <DetailField
                field="Email"
                content={peserta.email}
              />
              <DetailField
                field="Alamat Saat Ini"
                content={peserta.address}
              />
              <DetailField
                field="Provinsi"
                content={peserta.province}
              />
              <DetailField
                field="Kabupaten/Kota"
                content={peserta.city}
              />
              <DetailField
                field="Asal Universitas"
                content={peserta.university}
              />
              <DetailField
                field="Fakultas"
                content={peserta.faculty}
              />
              <DetailField
                field="Program Studi"
                content={peserta.major}
              />
              <DetailGroupField
                group={peserta.group}
                subGroup={peserta.subGroup}
              />
            </div>
          ) : null}
        </div>
      </main>
    );
  }
}

export default PesertaDetail;
