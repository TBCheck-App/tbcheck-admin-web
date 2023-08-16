"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  imageSrc: string;
  buttonText: string;
  destPage: string;
}

function Button({ imageSrc, buttonText, destPage }: Props) {
  const router = useRouter();

  const goTo = () => {
    router.push(destPage);
  };
  return (
    <button
      className="w-[163px] h-[132px] text-sm text-center font-semibold px-4 py-5 border rounded-lg flex flex-col items-center justify-between gap-2"
      onClick={goTo}
    >
      <Image
        src={imageSrc}
        alt=""
        width={50}
        height={50}
      />
      <p>{buttonText}</p>
    </button>
  );
}

export default Button;
