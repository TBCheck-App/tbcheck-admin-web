import React from "react";

function TBCReportTable() {
  return (
    <div className="text-xs h-12 grid grid-tbc-table border-t">
      <div className="p-2 flex justify-center items-center">
        <p>26/07/2023</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p>A</p>
      </div>
      <div className="p-2 flex justify-center items-center">
        <a
          className="font-semibold text-[#5497F6]"
          href=""
        >
          Azmi Ramadisha
        </a>
      </div>
      <div className="p-2 flex justify-center items-center">
        <p>Universitas Indonesia</p>
      </div>
    </div>
  );
}

export default TBCReportTable;
