import React from "react";

interface Props {
  field: string;
  content: string;
}

function DetailField({ field, content }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">{field}</p>
      <p>{content}</p>
    </div>
  );
}

export default DetailField;
