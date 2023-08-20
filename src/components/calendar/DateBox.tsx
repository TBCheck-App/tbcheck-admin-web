import React from "react";

interface Props {
  text: string;
  className?: string;
}

function DateBox({ text, className }: Props) {
  return (
    <div className={`w-8 h-8 flex justify-center items-center ${className}`}>
      <p>{text}</p>
    </div>
  );
}

export default DateBox;
