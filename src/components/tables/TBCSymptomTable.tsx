import React from "react";

interface Props {
  symptomText: string;
  answer: string;
}

function TBCSymptomTable({ symptomText, answer }: Props) {
  return (
    <div className="text-xs grid grid-tbc-table-detail border-t items-center px-2 py-3">
      <p>{symptomText}</p>
      <p className="text-right">{answer}</p>
    </div>
  );
}

export default TBCSymptomTable;
