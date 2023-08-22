import React from "react";

interface Props {
  title: string;
  content: string;
}

function DataField({ title, content }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default DataField;
