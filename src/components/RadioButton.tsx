import React, { useState } from "react";

interface Props {
  checked?: boolean;
  text: string;
}

function RadioButton({ checked = false, text }: Props) {
  return (
    <div className="flex flex-row gap-2 items-center">
      {checked ? (
        <div className="w-4 h-4 bg-[#5497F6] rounded-full flex justify-center items-center">
          <div className="w-[6px] h-[6px] bg-white rounded-full"></div>
        </div>
      ) : (
        <div className="w-4 h-4 bg-[#D3DAE6] rounded-full"></div>
      )}

      <label>{text}</label>
    </div>
  );
}

export default RadioButton;
