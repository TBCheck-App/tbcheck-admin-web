"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import Backdrop from "@/components/Backdrop";

const DeleteAccountPage = () => {
  // states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showConfirmBox, setShowConfirmBox] = useState<boolean>(false);

  const handleClickDeleteAccount = async () => {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`,
        options
      );
      console.log(response);

      if (!response.ok) {
        throw new Error(
          `Cannot delete account. ${response.statusText} (${response.status}) `
        );
      } else {
        setShowConfirmBox(false);
        alert("Success delete account.");
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <main className="px-5 py-16 flex flex-col gap-9">
      <div className="text-center">
        <h1 className="text-[28px] font-bold">Hapus Akun</h1>
        <p>
          Dengan menghapus akun, Anda tidak akan bisa masuk dengan akun ini
          lagi.
        </p>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base">
            Username/E-mail<span className="text-[#F63564]">*</span>
          </h2>

          <div className="border border-[#EEF0F2] rounded-md flex flex-row w-full p-3 gap-3">
            <Image
              src="/user.svg"
              alt=""
              width={16}
              height={16}
            />
            <input
              type="text"
              className="focus:outline-none w-full text-sm"
              onChange={handleChangeUsername}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base">
            Password<span className="text-[#F63564]">*</span>
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
              onChange={handleChangePassword}
            />
          </div>
        </div>
      </div>

      <ButtonBlue
        buttonText="Hapus"
        onClick={() => setShowConfirmBox(true)}
        className="w-full"
      />

      {showConfirmBox ? (
        <div>
          <Backdrop setShowState={() => setShowConfirmBox(false)} />

          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[350px] flex flex-col gap-3 rounded-md">
            <h1 className="font-bold text-xl text-center">
              Apakah Anda yakin ingin menghapus akun Anda?
            </h1>
            <p className="text-center">
              Anda tidak akan bisa login sebagai {username} lagi.
            </p>

            <ButtonBlue
              buttonText="Ya"
              onClick={handleClickDeleteAccount}
            />
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default DeleteAccountPage;
