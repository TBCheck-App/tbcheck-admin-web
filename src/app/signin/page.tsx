"use client";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import apiEndpoints from "@/config/apiEndpoints";
import { storeToken } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

function SignIn() {
  // states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // router
  const router = useRouter();

  const handleClickSignIn = () => {
    const body = {
      username,
      password,
    };
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.login}`,
      options
    )
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.responseCode == 200) {
          if (storeToken({ token: resJson.access_token })) {
            router.push("/");
          } else {
            alert("Cannot store token.");
          }
        }
      });
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
        <h1 className="text-[28px] font-bold">Sign In</h1>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base">
            Username<span className="text-[#F63564]">*</span>
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
        buttonText="Masuk"
        onClick={handleClickSignIn}
        className="w-full"
      />
    </main>
  );
}

export default SignIn;
