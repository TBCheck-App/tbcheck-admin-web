import Image from "next/image";
import React from "react";

interface Props {
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icons?: string;
}

function ButtonBlue({ buttonText, onClick, className, icons }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#5497F6] text-white text-sm p-3 rounded-md flex flex-row justify-center items-center gap-4 ${className}`}
    >
      {icons ? (
        <Image
          src={icons}
          alt=""
          width={20}
          height={20}
        />
      ) : null}

      <p>{buttonText}</p>
    </button>
  );
}

export default ButtonBlue;
