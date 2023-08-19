import React, { useState } from "react";
import ButtonOutlined from "../buttons/ButtonOutlined";
import ButtonBlue from "../buttons/ButtonBlue";

interface Props {
  group: string;
  subGroup: number;
}

function DetailGroupField({ group, subGroup }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);

  const showEditMode = () => {
    setEditMode(true);
  };

  const saveEdit = () => {
    setEditMode(false);
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold">Group</h1>
          {editMode ? null : (
            <ButtonOutlined
              icons="/pencil-square.svg"
              text="Ubah"
              className="w-fit px-3 py-2"
              onClick={showEditMode}
            />
          )}
        </div>
        {editMode ? (
          <select className="border w-full px-3 py-2 rounded-md">
            <option value="">Semua</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
          </select>
        ) : (
          <input
            type="text"
            value={group}
            className="bg-[#EEF2F7] px-3 py-2 rounded-md text-[#ABB4C4]"
            disabled
          />
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-bold">Sub-group</h1>
        </div>
        {editMode ? (
          <select className="border w-full px-3 py-2 rounded-md">
            <option value="">Semua</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        ) : (
          <input
            type="text"
            value={`${group}${subGroup}`}
            className="bg-[#EEF2F7] px-3 py-2 rounded-md text-[#ABB4C4]"
            disabled
          />
        )}
      </div>

      {editMode ? (
        <ButtonBlue
          buttonText="Simpan Perubahan"
          onClick={saveEdit}
        />
      ) : null}
    </div>
  );
}

export default DetailGroupField;
