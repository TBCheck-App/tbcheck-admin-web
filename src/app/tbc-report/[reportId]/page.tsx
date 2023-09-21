'use client';
import ButtonBack from '@/components/buttons/ButtonBack';
import { tokenIsValid } from '@/utils/auth';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import DataField from '@/components/DataField';
import TBCSymptomTable from '@/components/tables/TBCSymptomTable';
import TBCHistoryTravelTable from '@/components/tables/TBCHistoryTravelTable';
import TBCCloseContactCard from '@/components/TBCCloseContactCard';
import RiskCurveBox from '@/components/RiskCurveBox';
import ButtonBlue from '@/components/buttons/ButtonBlue';
import { ReportDetailProps } from '@/type';
import { getTBReportDetail } from '@/utils/fetch';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const generateSymptompAnswer = (rawAnswer: 'YES' | 'NO' | 'UNKNOWN') => {
  if (rawAnswer === 'YES') return 'Ya';
  if (rawAnswer === 'NO') return 'Tidak';
  else return 'Tidak Tahu';
};

function TBCReportDetail({ params }: { params: { reportId: string } }) {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);
  const [reportDetail, setReportDetail] = useState<null | ReportDetailProps>(
    null,
  );

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push('/signin');
      }
    });
    getTBReportDetail(params.reportId)
      .then((res) => res.json())
      .then((resJson) => setReportDetail(resJson.report))
      .catch((err) => alert(err.message));
  }, []);

  if (render) {
    return (
      <main className="flex flex-col gap-5">
        <div className="px-4">
          <ButtonBack buttonText="Kembali" destPage="/tbc-report" />
        </div>

        {reportDetail && (
          <div className="mx-5 flex flex-col gap-[38px]">
            <div className="flex justify-center items-center">
              <h1 className="font-bold text-2xl">Detail Laporan</h1>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">Nama Lengkap</h2>
                <div className="flex justify-between items-center">
                  <p>{reportDetail.name}</p>
                  <Link
                    href={`/data-peserta/${reportDetail.userId}`}
                    className="text-sm font-medium text-[#5497F6] flex flex-row gap-4"
                  >
                    <p>Lihat data peserta</p>
                    <Image
                      src="/pencil-square.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>

              <DataField title="Group" content={reportDetail.group} />
              <DataField
                title="Sub-Group"
                content={`${reportDetail.group}${reportDetail.subGroup}`}
              />
              <DataField
                title="Hari, Tanggal Laporan"
                content={new Date(reportDetail.reportDate)
                  .toLocaleDateString('id-ID', {
                    weekday: 'long',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })
                  .replace(/(\d+)\/(\d+)\/(\d+)/, '$2/$1/$3')}
              />
              <DataField
                title="Asal Universitas"
                content={reportDetail.university}
              />

              <div className="flex flex-col gap-6">
                <h2 className="font-bold">Informasi Gejala Kesehatan</h2>

                <div className="border rounded">
                  <header>
                    <p className="font-semibold text-xs px-2 py-3">Gejala</p>
                  </header>

                  <TBCSymptomTable
                    symptomText="Batuk Berdahak > 2-3 Minggu"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.coughWithPhlegm,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Batuk Berdarah"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.bleedingCough,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Demam hilang timbul > 1 bulan"
                    answer={generateSymptompAnswer(reportDetail.symptoms.fever)}
                  />
                  <TBCSymptomTable
                    symptomText="Keringat malam tanpa aktifitas"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.nightSweats,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Penurunan Berat Badan tanpa sebab yang jelas"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.loseWeight,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Pembesaran kelenjar getah bening (benjolan di sekitar leher) dengan ukuran > 2 cm"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.lymphNodeEnlargement,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Sesak napas dan nyeri dada"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.breathless,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Pernah minum obat paru dalam waktu lama sebelumnya"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.takenPulmonaryMedicine,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Ada keluarga/ tetangga yang pernah sakit paru-paru/TB/pengobatan paru lama"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.relativesWithTB,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Mengidap asma"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.asthma,
                    )}
                  />
                  <TBCSymptomTable
                    symptomText="Mengidap DM"
                    answer={generateSymptompAnswer(
                      reportDetail.symptoms.diabetesMellitus,
                    )}
                  />
                </div>

                <DataField
                  title="Gejala lain yang dirasakan"
                  content={reportDetail.otherSymptoms}
                />
              </div>

              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Tanggal pertama kali timbul gejala
                </h2>
                <div className="flex flex-row gap-3 border px-3 py-3 rounded-md">
                  <Image
                    src="/calendar-days.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-sm">
                    {new Date(reportDetail.symptomDate).toLocaleDateString()}
                  </p>
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
                  {reportDetail.travelHistories.map((travelHistory, index) => {
                    return (
                      <TBCHistoryTravelTable
                        country={travelHistory.country}
                        city={travelHistory.city}
                        date={new Date(travelHistory.date).toLocaleDateString()}
                        key={index}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-bold">Daftar Kontak Erat</h2>
                {reportDetail.contacts.map((contact, index) => {
                  return <TBCCloseContactCard {...contact} key={index} />;
                })}
              </div>

              <DataField
                title="Jenis Tes yang Dilakukan"
                content={reportDetail.testType}
              />
              <DataField
                title="Tanggal Tes"
                content={new Date(reportDetail.testDate).toLocaleDateString()}
              />

              <div>
                <h2 className="font-bold">Hasil Tes</h2>

                <RiskCurveBox
                  risk={reportDetail.testResult}
                  className="w-fit text-xs px-2"
                />
              </div>

              <DataField title="Tempat Tes" content={reportDetail.testSite} />

              <Link href={'/'} className="block w-full">
                <ButtonBlue
                  buttonText="Buat Notifikasi"
                  className="w-full"
                  icons="/signal.svg"
                />
              </Link>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default TBCReportDetail;
