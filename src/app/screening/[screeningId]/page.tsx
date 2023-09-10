"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonOutlined from "@/components/buttons/ButtonOutlined";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import RiskCurveBox from "@/components/RiskCurveBox";
import { getScreeningDetail } from "@/utils/fetch";
import { ScreeningDetail } from "@/type";
import { getDayIndex } from "@/utils/date";
import { dayNames } from "@/config/var";
import ScreeningAnswer from "@/components/ScreeningAnswer";

interface Props {
  params: {
    id: string;
  };
}

function ScreeningDetail({ params }: Props) {
  const [screeningDetail, setScreeningDetail] =
    useState<ScreeningDetail | null>(null);
  const [date, setDate] = useState<Date | null>(null);
  const [render, setRender] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      getScreeningDetail(params.id)
        .then((res) => res.json())
        .then((resJson) => {
          setScreeningDetail(resJson.screening);
          setDate(new Date(resJson.screening.createdAt));
        })
        .catch((error) =>
          alert(`There was a problem with the fetch operation: ${error}`)
        );

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
                <p>{screeningDetail?.name}</p>
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
              {date ? (
                <p>
                  {
                    dayNames[
                      getDayIndex(
                        date.getFullYear(),
                        date.getMonth(),
                        date.getDate()
                      )
                    ]
                  }
                  , {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Group</h2>
              <p>{screeningDetail?.group}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Sub-Group</h2>
              <p>{`${screeningDetail?.group}${screeningDetail?.subGroup}`}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Asal Universitas</h2>
              <p>{screeningDetail?.university}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Hasil Skrining</h2>
              {screeningDetail ? (
                <RiskCurveBox
                  risk={screeningDetail.result}
                  className="w-fit h-fit text-xs py-2 px-4"
                />
              ) : null}
            </div>
          </div>

          {screeningDetail ? (
            <div className="flex flex-col gap-5">
              <p className="font-bold text-[#546881]">
                Hasil Jawaban Pertanyaan
              </p>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda sedang batuk dalam 2 bulan terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.coughPast2Months}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Sudah berapa lama anda batuk?</h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.coughDuration}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Bila sedang batuk, apakah Anda batuk berdahak?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.coughWithPhlegm}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda pernah batuk berdarah dalam 1 tahun terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.coughBloodPast1Year}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda sering mengalami demam/meriang dalam 2 bulan
                  terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.feverPast2Months}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Berapa lama Anda demam/meriang?</h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.feverDuration}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda mengalami nyeri dada dalam 2 bulan terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.chestPainPast2Months}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda mengalami sesak napas dalam 2 bulan terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.shortnessOfBreathPast2Months}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda sering mengalami badan lemas atau lesu dalam 2
                  bulan terakhir tanpa sebab yang jelas? (Anda sedang
                  beraktivitas normal atau tidak sedang menjalani pekerjaan
                  berat, tetapi badan Anda terasa lemas/lesu)
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.fatigueUnexplainedPast2Months}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah nafsu makan Anda turun dalam 2 bulan terakhir tanpa
                  sebab yang jelas?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.decreasedAppetitePast2Months}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda merasa berat badan Anda turun tanpa sebab yang
                  jelas dalam 2 bulan terakhir? (Anda tidak sedang menjalani
                  diet atau pantang makanan tertentu, tetapi BB Anda turun
                  signifikan)
                </h2>
                <ScreeningAnswer
                  answer={
                    screeningDetail.answer.unexplainedWeightLossPast2Months
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda sering berkeringat pada malam hari tanpa sebab
                  yang jelas? (walaupun suhu ruangan normal atau sejuk, justru
                  Anda berkeringat)
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.nightSweatsUnexplained}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Apakah Anda merokok?</h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.smokingHistory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Sudah berapa lama Anda merokok?</h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.smokingDuration}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Berapa banyak batang rokok yang dihisap/hari?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.cigarettesPerDay}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda juga pengguna rokok elektrik?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.eCigaretteUser}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Tahun berapa Anda berhenti merokok?
                </h2>
                <ScreeningAnswer answer={screeningDetail.answer.quitYear} />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda pernah didiagnosis TBC/flek paru/pengobatan wajib
                  6 bulan?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.tbDiagnosisHistory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Tahun berapa Anda didiagnosis TBC/flek paru/pengobatan wajib 6
                  bulan?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.tbDiagnosisYear}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda menjalani pengobatan sampai tuntas dan dinyatakan
                  sembuh oleh petugas kesehatan?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.tbTreatmentComplete}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda masih menjalani pengobatan TBC (belum selesai)?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.tbTreatmentOngoing}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda pernah tinggal serumah dengan penderita TBC/flek
                  paru?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.tbHouseholdContact}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah orang pernah tinggal serumah adalah penderita TBC kebal
                  obat/tidak mempan obat/resistan obat?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.householdTbStatus}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah ada teman Anda di tempat kerja yang menderita TBC/flek
                  paru?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.tbCoworkerContact}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah teman Anda di tempat kerja adalah penderita TBC kebal
                  obat/tidak mempan obat/resistan obat?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.coworkerTbStatus}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda memiliki riwayat penyakit diabetes melitus/kencing
                  manis/sakit gula?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.diabetesHistory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah Anda pernah menjalani tes HIV?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.hivTestHistory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Apa hasil tes HIV Anda?</h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.hivTestResult}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah anda pernah menjalani pemeriksaan foto rontgen
                  paru/dada?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.chestXRayHistory}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Tahun berapa foto rontgen paru terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.lastChestXrayYear}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah hasil rontgen paru terakhir Anda normal?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.lastChestXrayResult}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Apakah ada gambar flek paru/TBC pada rontgen terakhir?
                </h2>
                <ScreeningAnswer
                  answer={screeningDetail.answer.hasChestXrayAbnormality}
                />
              </div>
            </div>
          ) : null}
        </div>
      </main>
    );
  }
}

export default ScreeningDetail;
