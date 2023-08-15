import React from "react";
import Image from "next/image";

function ButtonOutlined() {
  return (
    <button className="border border-[#5497F6] w-full flex flex-row justify-center gap-4 rounded-md py-3">
      <Image
        src="download.svg"
        alt=""
        width={20}
        height={20}
      />
      <p className="text-sm font-medium text-[#5497F6]">Data Peserta</p>
    </button>
  );
}

export default ButtonOutlined;
