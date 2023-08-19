import apiEndpoints from "@/config/apiEndpoints";
import { Token } from "@/type";

const getAllUser = (): Promise<Response> => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllUser}`,
    options
  );
};

const getUserDetail = (id: string): Promise<Response> => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getUserDetail(id)}`,
    options
  );
};

export { getAllUser, getUserDetail };
