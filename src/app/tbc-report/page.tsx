"use client";
import ButtonBack from "@/components/buttons/ButtonBack";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function TBCReport() {
  const router = useRouter();
  const [render, setRender] = useState<boolean>(false);

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("/signin");
      }
    });
  }, []);

  if (render) {
    return (
      <main>
        <div className="px-4">
          <ButtonBack
            buttonText="Home"
            destPage="/"
          />
        </div>
      </main>
    );
  }
}

export default TBCReport;
