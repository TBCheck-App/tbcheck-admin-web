"use client";
import Calendar from "@/components/calendar/Calendar";
import ButtonBack from "@/components/buttons/ButtonBack";
import ButtonBlue from "@/components/buttons/ButtonBlue";
import { tokenIsValid } from "@/utils/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";

function MaskWearingTracker() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [render, setRender] = useState<boolean>(false);
  const [group, setGroup] = useState<string>("A");
  const [subGroup, setSubGroup] = useState<string>("1");

  const router = useRouter();

  const goToMWTSubGroup = () => {
    router.push(`/mask-wearing-tracker/${group}${subGroup}`);
  };

  const handleChangeGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setGroup(event.target.value);
  };

  const handleChangeSubGroup = (event: ChangeEvent<HTMLSelectElement>) => {
    setSubGroup(event.target.value);
  };

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (render && !isLoading) {
    return (
      <div className="flex flex-col gap-8">
        <div className="px-4">
          <ButtonBack
            buttonText="Home"
            destPage="/"
          />
        </div>

        <div className="px-4 flex flex-col gap-6">
          <div className="flex flex-col gap-3 justify-between items-center">
            <Image
              src="/mwt.svg"
              alt=""
              width={60}
              height={60}
            />
            <h1 className="font-bold text-2xl">History Mask Wearing Tracker</h1>
          </div>

          <h2 className="font-bold text-xl text-center">Pilih Grup</h2>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              Pilih Group<span className="text-[#F63564]">*</span>
            </h3>
            <select
              className="border w-full px-3 py-2 rounded-md"
              value={group}
              onChange={handleChangeGroup}
            >
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="H">H</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">
              Pilih Sub-group<span className="text-[#F63564]">*</span>
            </h3>
            <select
              className="border w-full px-3 py-2 rounded-md"
              value={subGroup}
              onChange={handleChangeSubGroup}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <ButtonBlue
            buttonText="Lihat History"
            onClick={goToMWTSubGroup}
          />
        </div>
      </div>
    );
  }
  if (!render && !isLoading) {
    router.push("signin");
  }
}

export default MaskWearingTracker;
