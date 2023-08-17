import { Token } from "@/type";

const storeToken = (token: Token): boolean => {
  if (typeof Storage !== undefined) {
    localStorage.setItem("token", JSON.stringify(token));
    return true;
  }
  return false;
};

export { storeToken };
