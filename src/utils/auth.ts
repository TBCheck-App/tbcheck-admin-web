import apiEndpoints from "@/config/apiEndpoints";
import { Token } from "@/type";

const storeToken = (token: Token): boolean => {
  if (typeof Storage !== undefined) {
    localStorage.setItem("token", JSON.stringify(token));
    return true;
  }
  return false;
};

const tokenIsValid = async (): Promise<boolean> => {
  if (typeof Storage !== undefined) {
    let token: string | Token | null = localStorage.getItem("token");

    if (token) {
      token = JSON.parse(token);

      if (token!.hasOwnProperty("token")) {
        const options: RequestInit = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${(token as Token).token}`,
          },
        };

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllUser}`,
          options
        );
        const resJson = await res.json();

        if (resJson.statusCode == 401) {
          return false;
        }

        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export { storeToken, tokenIsValid };
