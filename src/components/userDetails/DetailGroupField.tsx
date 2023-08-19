import React from "react";
import ButtonOutlined from "../buttons/ButtonOutlined";

interface Props {
  group: string;
  subGroup: number;
}

function DetailGroupField({ group, subGroup }: Props) {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">Group</h1>
          <ButtonOutlined
            icons="/pencil-square.svg"
            text="Ubah"
            className="w-fit px-3 py-2"
          />
        </div>
        <input
          type="text"
          value={group}
          className="bg-[#EEF2F7] px-3 py-2 rounded-md text-[#ABB4C4]"
          disabled
        />
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-bold">Sub-group</h1>
        </div>
        <input
          type="text"
          value={subGroup}
          className="bg-[#EEF2F7] px-3 py-2 rounded-md text-[#ABB4C4]"
          disabled
        />
      </div>
    </div>
  );
}

export default DetailGroupField;
