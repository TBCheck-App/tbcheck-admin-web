import React from "react";

interface Props {
  buttonText: string;
  onClick?: () => void;
  className?: string;
}

function ButtonBlue({ buttonText, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#5497F6] text-white text-sm p-3 rounded-md ${className}`}
    >
      {buttonText}
    </button>
  );
}

export default ButtonBlue;
