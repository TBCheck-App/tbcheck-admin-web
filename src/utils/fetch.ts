import apiEndpoints from "@/config/apiEndpoints";
import { Token } from "@/type";

const getAllUser = (group: string, subGroup: string): Promise<Response> => {
  let query = "?";

  if (group != "") {
    query += `group=${group}`;
  }

  if (subGroup != "") {
    if (query.includes("group")) {
      query += `&subGroup=${subGroup}`;
    } else {
      query += `subGroup=${subGroup}`;
    }
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllUser}${query}`,
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
