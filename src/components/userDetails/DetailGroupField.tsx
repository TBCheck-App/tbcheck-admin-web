import React, { ChangeEvent, useState } from "react";
import ButtonOutlined from "../buttons/ButtonOutlined";
import ButtonBlue from "../buttons/ButtonBlue";
import { changeUserGroupAndSubGroup } from "@/utils/fetch";

interface Props {
  group: string;
  subGroup: number;
  userId: string;
}

function DetailGroupField({ group, subGroup, userId }: Props) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [groupState, setGroupState] = useState<string>(group);
  const [subGroupState, setSubGroupState] = useState<number>(subGroup);

  const showEditMode = () => {
    setEditMode(true);
  };

  const saveEdit = () => {
    changeUserGroupAndSubGroup(userId, groupState, subGroupState)
      .then((res) => res.json())
      .then((resJson) => {
        setEditMode(false);
      })
      .catch((error) => alert(error));
  };

  const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroupState(event.target.value);
  };

  const handleChangeSubGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubGroupState(parseInt(event.target.value));
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
          <select
            className="border w-full px-3 py-2 rounded-md"
            value={groupState}
            onChange={handleChangeGroup}
          >
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
            value={groupState}
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
          <select
            className="border w-full px-3 py-2 rounded-md"
            value={subGroupState}
            onChange={handleChangeSubGroup}
          >
            <option value="">Semua</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        ) : (
          <input
            type="text"
            value={`${groupState}${subGroupState}`}
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
