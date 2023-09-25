"use client";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { resetPasswordUser } from "@/utils/auth";
import { redirect } from "next/navigation";

interface Props {
  params: {
    token: string;
  };
}

export default function ResetPasswordComponent({ params }: Props) {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [displayResult, setDisplayResult] = useState<boolean>(false);

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmNewPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleClickResetPassword = () => {
    console.log(newPassword);
    console.log(params.token);

    if (newPassword === confirmNewPassword) {
      resetPasswordUser(newPassword, params.token)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            return res.json();
          }
        })
        .then((resJson) => {
          setDisplayResult(true);
          setIsSuccess(true);
          throw new Error(resJson.message);
        })
        .catch((err) => {
          setDisplayResult(true);
          setIsSuccess(false);
        });
    } else {
      alert("Password baru tidak sama dengan konfirmasinya.");
    }
  };

  if (!displayResult) {
    return (
      <div className="p-5 flex flex-col gap-[38px]">
        <div className="text-center">
          <h1 className="text-[28px] font-bold">Atur Ulang Password</h1>
          <p>Password baru anda harus berbeda dari password sebelumnya</p>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-base">
              Password baru<span className="text-[#F63564]">*</span>
            </h2>
            <div className="border border-[#EEF0F2] rounded-md flex flex-row w-full p-3 gap-3">
              <Image
                src="/lock-closed.svg"
                alt=""
                width={16}
                height={16}
              />
              <input
                type="password"
                className="focus:outline-none w-full text-sm"
                onChange={handleChangeNewPassword}
                value={newPassword}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-base">
              Ketik Password baru<span className="text-[#F63564]">*</span>
            </h2>
            <div className="border border-[#EEF0F2] rounded-md flex flex-row w-full p-3 gap-3">
              <Image
                src="/lock-closed.svg"
                alt=""
                width={16}
                height={16}
              />
              <input
                type="password"
                className="focus:outline-none w-full text-sm"
                onChange={handleChangeConfirmNewPassword}
                value={confirmNewPassword}
              />
            </div>
          </div>
        </div>

        <ButtonBlue
          buttonText="Atur Ulang Password"
          className="w-full"
          onClick={handleClickResetPassword}
        />
      </div>
    );
  } else {
    if (isSuccess) {
      return (
        <div className="flex flex-col justify-center align-middle m-5 text-center">
          <div className="flex flex-col gap-4 justify-center align-middle">
            <h1 className="text-[28px] font-bold">Berhasil Ganti Password</h1>
            <Image
              src="/green-checklist.svg"
              alt=""
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-base">
              Silahkan masuk kembali di aplikasi TBCheck menggunakan password
              baru Anda.
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center align-middle m-5 text-center">
          <div className="flex flex-col gap-4 justify-center align-middle">
            <h1 className="text-[28px] font-bold">Gagal Ganti Password</h1>
            <Image
              src="/red-cross.svg"
              alt=""
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="text-base">
              Link yang anda gunakan sudah tidak berlaku, harap kembali ke
              aplikasi TBCheck dan ulang kembali tahap lupa password
            </p>
          </div>
        </div>
      );
    }
  }
}
