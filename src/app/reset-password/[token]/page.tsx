"use client";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";

interface Props {
  params: {
    token: string;
  };
}

export default function ResetPasswordComponent({ params }: Props) {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const handleChangeNewPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmNewPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmNewPassword(event.target.value);
  };

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
              onChange={handleChangeConfirmNewPassword}
              value={confirmNewPassword}
            />
          </div>
        </div>
      </div>

      <ButtonBlue
        buttonText="Atur Ulang Password"
        className="w-full"
      />
    </div>
  );
}
