"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CreateNotificationPage = () => {
  const [render, setRender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (render && !isLoading) {
    return (
      <main className="flex flex-col gap-8">
        <div className="px-4">
          <ButtonBack
            buttonText="Kembali"
            destPage="/send-notification"
          />
        </div>

        <div className="flex flex-col gap-6 mx-5">
          <h1 className="text-2xl font-bold text-center">
            Buat Notifikasi Baru
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              Pilih Group<span className="text-[#F63564]">*</span>
            </h2>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>A</label>
              </div>

              <p>Universitas Indonesia</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>B</label>
              </div>

              <p>Universitas Telkom</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>C</label>
              </div>

              <p>Universitas Nusa Cendana</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>D</label>
              </div>

              <p>Universitas Teknokrat Indonesia</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>E</label>
              </div>

              <p>Universitas Indonesia</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>F</label>
              </div>

              <p>Universitas Telkom</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>G</label>
              </div>

              <p>Universitas Nusa Cendana</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <label>H</label>
              </div>

              <p>Universitas Teknokrat Indonesia</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              Tanggal Notifikasi<span className="text-[#F63564]">*</span>
            </h2>

            <div className="border flex items-center p-3 rounded-md">
              <input type="date" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold">
              Waktu Notifikasi<span className="text-[#F63564]">*</span>
            </h2>

            <div className="border flex gap-3 items-center p-3 rounded-md">
              <Image
                src="/clock.svg"
                alt=""
                width={16}
                height={16}
              />

              <input type="time" />
            </div>
          </div>

          <ButtonBlue
            icons="/plus.svg"
            buttonText="Buat Notifikasi"
          />
        </div>
      </main>
    );
  }

  if (!render && !isLoading) {
    router.push("signin");
  }
};

export default CreateNotificationPage;
