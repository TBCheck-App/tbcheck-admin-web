import apiEndpoints from "@/config/apiEndpoints";
import { Token } from "@/type";

const storeToken = (token: Token): boolean => {
  if (typeof Storage !== undefined) {
    localStorage.setItem("token", JSON.stringify(token));
    return true;
  }
  return false;
};

const tokenIsAvailable = (): boolean => {
  if (typeof Storage !== undefined) {
    let token: string | Token | null = localStorage.getItem("token");

    if (token) {
      token = JSON.parse(token);

      if (token!.hasOwnProperty("token")) {
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

export { storeToken, tokenIsAvailable };
