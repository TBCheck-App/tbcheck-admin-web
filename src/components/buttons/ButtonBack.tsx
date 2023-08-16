"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  buttonText: string;
  destPage: string;
}

function ButtonBack({ buttonText, destPage }: Props) {
  const router = useRouter();

  const goTo = () => {
    router.push(destPage);
  };

  return (
    <button
      className="flex flex-row items-center gap-4"
      onClick={goTo}
    >
      <Image
        src="chevron-left.svg"
        alt=""
        width={20}
        height={20}
      />{" "}
      <p className="text-sm text-[#5497F6]">{buttonText}</p>
    </button>
  );
}

export default ButtonBack;
