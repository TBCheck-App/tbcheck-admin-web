import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  icons?: string;
  text: string;
  className?: string;
  onClick?: () => void;
  filename?: string;
  fileURL?: string;
}

function ButtonOutlined({
  icons,
  text,
  className,
  onClick,
  filename,
  fileURL,
}: Props) {
  if (filename != null && fileURL != null) {
    if (fileURL != "") {
      return (
        <a
          className={twMerge(
            "border border-[#5497F6] w-full flex flex-row justify-center gap-4 rounded-md py-3",
            className
          )}
          href={fileURL}
          download={filename}
        >
          {icons ? (
            <Image
              src={icons}
              alt=""
              width={20}
              height={20}
            />
          ) : null}
          <p className="text-sm font-medium text-[#5497F6]">{text}</p>
        </a>
      );
    } else {
      return (
        <a
          className={twMerge(
            "border border-[#5497F6] w-full flex flex-row justify-center gap-4 rounded-md py-3",
            className
          )}
          onClick={() =>
            alert(
              "Preparing download...please kindly wait 🙏. Try press again later."
            )
          }
          download={filename}
        >
          {icons ? (
            <Image
              src={icons}
              alt=""
              width={20}
              height={20}
            />
          ) : null}
          <p className="text-sm font-medium text-[#5497F6]">{text}</p>
        </a>
      );
    }
  } else {
    return (
      <button
        className={twMerge(
          "border border-[#5497F6] w-full flex flex-row justify-center gap-4 rounded-md py-3",
          className
        )}
        onClick={onClick}
      >
        {icons ? (
          <Image
            src={icons}
            alt=""
            width={20}
            height={20}
          />
        ) : null}
        <p className="text-sm font-medium text-[#5497F6]">{text}</p>
      </button>
    );
  }
}

export default ButtonOutlined;
