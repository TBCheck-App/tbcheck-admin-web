import React from "react";
import Image from "next/image";
import ButtonBack from "@/components/buttons/ButtonBack";

function ResponseTimeLogDetail() {
  return (
    <main className="flex flex-col gap-5">
      <div className="px-4">
        <ButtonBack
          buttonText="Kembali"
          destPage={``}
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
            <h2 className="font-bold">Sub-Group</h2>
            <p>A1</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Hari, Tanggal Respon</h2>
            <p>Rabu, 26/07/2023</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Waktu Respon</h2>
            <p>19:30:36 WIB</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Jeda Respon dari Notifikasi</h2>
            <p>10 Menit</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Group</h2>
            <p>A</p>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">Group</h2>
            <p>A</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ResponseTimeLogDetail;
