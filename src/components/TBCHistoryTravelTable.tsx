import React from "react";

interface Props {
  country: string;
  city: string;
  date: string;
}

function TBCHistoryTravelTable({ country, city, date }: Props) {
  return (
    <div className="px-2 py-3 grid grid-cols-3 border-t">
      <p>{country}</p>
      <p>{city}</p>
      <p>{date}</p>
    </div>
  );
}

export default TBCHistoryTravelTable;
