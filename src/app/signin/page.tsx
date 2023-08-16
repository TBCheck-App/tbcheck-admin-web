"use client";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import Image from "next/image";
import React from "react";

function SignIn() {
  const handleSignIn = () => {
    console.log("Sign in");
  };

  return (
    <main className="px-5 py-16 flex flex-col gap-9">
      <div className="text-center">
        <h1 className="text-[28px] font-bold">Sign In</h1>
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-base">
            Email/Username<span className="text-[#F63564]">*</span>
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
            />
          </div>
        </div>
      </div>

      <ButtonBlue
        buttonText="Masuk"
        onClick={handleSignIn}
        className="w-full"
      />
    </main>
  );
}

export default SignIn;
