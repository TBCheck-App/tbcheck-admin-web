"use client";
import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function TBCReportDetail() {
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
    return <main>TBCReportDetail</main>;
  }
}

export default TBCReportDetail;
