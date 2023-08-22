"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DataField from "@/components/DataField";
import TBCSymptomTable from "@/components/tables/TBCSymptomTable";
import TBCHistoryTravelTable from "@/components/tables/TBCHistoryTravelTable";
import TBCCloseContactCard from "@/components/TBCCloseContactCard";
import RiskCurveBox from "@/components/RiskCurveBox";
import ButtonBlue from "@/components/buttons/ButtonBlue";

function TBCReportDetail() {
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
            destPage="/tbc-report"
          />
        </div>

        <div className="mx-5 flex flex-col gap-[38px]">
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-2xl">Detail Laporan</h1>
          </div>

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

            <DataField
              title="Group"
              content="A"
            />
            <DataField
              title="Sub-Group"
              content="A1"
            />
            <DataField
              title="Hari, Tanggal Laporan"
              content="Rabu, 26/07/2023"
            />
            <DataField
              title="Asal Universitas"
              content="Universitas Indonesia"
            />

            <div className="flex flex-col gap-6">
              <h2 className="font-bold">Informasi Gejala Kesehatan</h2>

              <div className="border rounded">
                <header>
                  <p className="font-semibold text-xs px-2 py-3">Gejala</p>
                </header>

                <TBCSymptomTable
                  symptomText="Batuk Berdahak > 2-3 Minggu"
                  answer="Tidak Tahu"
                />
                <TBCSymptomTable
                  symptomText="Batuk Berdarah"
                  answer="Tidak Tahu"
                />
                <TBCSymptomTable
                  symptomText="Demam hilang timbul > 1 bulan"
                  answer="Tidak Tahu"
                />
                <TBCSymptomTable
                  symptomText="Keringat malam tanpa aktifitas"
                  answer="Tidak Tahu"
                />
                <TBCSymptomTable
                  symptomText="Penurunan Berat Badan tanpa sebab yang jelas"
                  answer="Tidak Tahu"
                />
                <TBCSymptomTable
                  symptomText="Pembesaran kelenjar getah bening (benjolan di sekitar leher) dengan ukuran > 2 cm"
                  answer="Tidak"
                />
                <TBCSymptomTable
                  symptomText="Sesak napas dan nyeri dada"
                  answer="Ya"
                />
                <TBCSymptomTable
                  symptomText="Pernah minum obat paru dalam waktu lama sebelumnya"
                  answer="Tidak Tahu"
                />
                <TBCSymptomTable
                  symptomText="Ada keluarga/ tetangga yang pernah sakit paru-paru/TB/pengobatan paru lama"
                  answer="Tidak"
                />
                <TBCSymptomTable
                  symptomText="Mengidap asma"
                  answer="Ya"
                />
                <TBCSymptomTable
                  symptomText="Mengidap DM"
                  answer="Ya"
                />
              </div>

              <DataField
                title="Gejala lain yang dirasakan"
                content="-"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Tanggal pertama kali timbul gejala</h2>
              <div className="flex flex-row gap-3 border px-3 py-3 rounded-md">
                <Image
                  src="/calendar-days.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                <p className="text-sm">11/07/2020</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Riwayat Perjalanan</h2>

              <div className="border rounded text-xs">
                <div className="px-2 py-3 grid grid-cols-3">
                  <p className="font-medium">Negara</p>
                  <p className="font-medium">Kota</p>
                  <p className="font-medium">Tanggal</p>
                </div>
                <TBCHistoryTravelTable
                  country="Indonesia"
                  city="Padang"
                  date="17/08/1945"
                />
                <TBCHistoryTravelTable
                  country="Indonesia"
                  city="Padang"
                  date="17/08/1945"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-bold">Daftar Kontak Erat</h2>

              <TBCCloseContactCard />
              <TBCCloseContactCard />
            </div>

            <DataField
              title="Jenis Tes yang Dilakukan"
              content="TCM TB"
            />
            <DataField
              title="Tanggal Tes"
              content="23/07/2023"
            />

            <div>
              <h2 className="font-bold">Hasil Tes</h2>

              <RiskCurveBox
                risk="HIGH_RISK"
                className="w-fit text-xs px-2"
              />
            </div>

            <DataField
              title="Tempat Tes"
              content="Rumah Sakit Universitas Indonesia"
            />

            <ButtonBlue
              buttonText="Buat Notifikasi"
              icons="/signal.svg"
            />
          </div>
        </div>
      </main>
    );
  }
}

export default TBCReportDetail;
