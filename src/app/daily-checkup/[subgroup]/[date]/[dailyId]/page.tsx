import { tokenIsValid } from "@/utils/auth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function DailyCheckUpDetail() {
  const [render, setRender] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    tokenIsValid().then((res) => {
      setRender(res);

      if (res == false) {
        router.push("signin");
      }
    });
  }, []);

  if (render) {
    return <div>DailyCheckUpDetail</div>;
  }
}

export default DailyCheckUpDetail;
