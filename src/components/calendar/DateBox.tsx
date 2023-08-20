import React from "react";

interface Props {
  text: string;
  className?: string;
  href?: string;
}

function DateBox({ text, className, href }: Props) {
  return (
    <div className={`w-8 h-8 flex justify-center items-center ${className}`}>
      <a href={href}>{text}</a>
    </div>
  );
}

export default DateBox;
