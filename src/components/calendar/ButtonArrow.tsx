import Image from "next/image";
import React from "react";

interface Props {
  iconSrc: string;
  onClick: () => void;
}

function ButtonArrow({ iconSrc, onClick }: Props) {
  return (
    <button
      className="w-8 h-8 flex justify-center items-center"
      onClick={onClick}
    >
      <Image
        src={iconSrc}
        alt=""
        width={16}
        height={16}
      />
    </button>
  );
}

export default ButtonArrow;
