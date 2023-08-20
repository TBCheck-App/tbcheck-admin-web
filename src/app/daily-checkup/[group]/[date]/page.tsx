import ButtonBack from "@/components/buttons/ButtonBack";
import React from "react";

interface Props {
  params: { group: string; date: string };
}

function DailyCheckUpData({ params }: Props) {
  return (
    <main>
      <div className="px-4">
        <ButtonBack
          buttonText="Kembali"
          destPage="/daily-checkup"
        />
      </div>
      {params.group}
      {params.date}
    </main>
  );
}

export default DailyCheckUpData;
