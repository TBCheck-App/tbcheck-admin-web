import React from "react";
import { TBCReportTableProps } from "@/type";
import Link from "next/link";

function TBCReportTable({
  dateStr,
  userClass,
  name,
  university,
  id,
}: TBCReportTableProps) {
  return (
    <div className="text-xs h-12 grid grid-tbc-table border-t">
      <div className="p-2 flex justify-center items-center">
        <p>{new Date(dateStr).toLocaleDateString()}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p>{userClass}</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <Link
          className="font-semibold text-[#5497F6] text-center"
          href={`/tbc-report/${id}`}
        >
          {name}
        </Link>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p>{university}</p>
      </div>
    </div>
  );
}

export default TBCReportTable;
