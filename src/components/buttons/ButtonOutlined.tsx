import React from "react";
import Image from "next/image";

interface Props {
  icons: string;
  text: string;
  className?: string;
  onClick?: () => void;
}

function ButtonOutlined({ icons, text, className, onClick }: Props) {
  return (
    <button
      className={`border border-[#5497F6] w-full flex flex-row justify-center gap-4 rounded-md py-3 ${className}`}
      onClick={onClick}
    >
      <Image
        src={icons}
        alt=""
        width={20}
        height={20}
      />
      <p className="text-sm font-medium text-[#5497F6]">{text}</p>
    </button>
  );
}

export default ButtonOutlined;
