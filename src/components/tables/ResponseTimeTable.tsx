import React from "react";

interface Props {
  id: string;
  date: Date;
  group: string;
  subGroup: number;
  name: string;
  sentAt: string;
  respondedAt: string;
}

function ResponseTimeTable({
  id,
  date,
  group,
  subGroup,
  name,
  sentAt,
  respondedAt,
}: Props) {
  const sentAtDate = new Date(sentAt);
  const respondedAtDate = new Date(respondedAt);
  const differenceInSeconds = Math.round(
    (respondedAtDate.getTime() - sentAtDate.getTime()) / 1000
  );
  // console.log(differenceInSeconds);
  const differenceInMinutes = (differenceInSeconds / 60).toFixed(2);
  console.log(differenceInMinutes);

  return (
    <div className="text-xs min-h-[3rem] h-fit grid grid-response-table border-t">
      <div className="p-2 flex justify-center items-center">
        <p>{`${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p>{group}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p>{subGroup}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <a
          className="font-semibold text-[#5497F6] text-center"
          href={`response-time-log/${id}`}
        >
          {name}
        </a>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p className="text-center">
          {respondedAt ? `${differenceInMinutes} Menit` : "Belum dijawab"}
        </p>
      </div>
    </div>
  );
}

export default ResponseTimeTable;
