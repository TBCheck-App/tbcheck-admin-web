import React from "react";

interface Props {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

function Backdrop({ setState }: Props) {
  const removeClick = () => {
    setState(false);
  };

  return (
    <div
      id="backdrop"
      className="fixed inset-0 bg-black opacity-50"
      onClick={removeClick}
    ></div>
  );
}

export default Backdrop;
