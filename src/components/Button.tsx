import React from "react";
import Image from "next/image";

interface Props {
  imageSrc: string;
  buttonText: string;
}

function Button({ imageSrc, buttonText }: Props) {
  return (
    <button className="w-[163px] h-[132px] text-sm text-center font-semibold px-4 py-5 border rounded-lg flex flex-col items-center justify-between gap-2">
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
