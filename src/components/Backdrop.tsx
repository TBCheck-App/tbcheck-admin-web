import React from "react";

interface Props {
  setShowState: React.Dispatch<React.SetStateAction<boolean>>;
}

function Backdrop({ setShowState }: Props) {
  const removeClick = () => {
    setShowState(false);
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
