import apiEndpoints from "@/config/apiEndpoints";
import { Token } from "@/type";

const getAllUser = (
  name: string,
  group: string,
  subGroup: string
): Promise<Response> => {
  let query = "?";

  if (name != "") {
    query += `name=${name}`;
  }

  if (group != "") {
    if (query.includes("name")) {
      query += `&group=${group}`;
    } else {
      query += `group=${group}`;
    }
  }

  if (subGroup != "") {
    if (query.includes("group") || query.includes("name")) {
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

const getAllDailyCheckup = (
  group: string,
  subGroup: number,
  date: string,
  name: string
): Promise<Response> => {
  let query = "?";

  if (name != "") {
    query += `name=${name}`;
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllDailyCheckup(
      group,
      subGroup,
      date
    )}${query}`,
    options
  );
};

const getDetailDailyCheckup = (id: string): Promise<Response> => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }/${apiEndpoints.getDetailDailyCheckup(id)}`,
    options
  );
};

const getAllScreening = (name: string): Promise<Response> => {
  let query = "?";

  if (name != "") {
    query += `name=${name}`;
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllScreening}${query}`,
    options
  );
};

const getScreeningDetail = (id: string): Promise<Response> => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getScreeningDetail(
      id
    )}`,
    options
  );
};

const getAllTBReport = (
  search: string,
  group: string,
  subGroup: string
): Promise<Response> => {
  // TODO: NOT DONE(?)
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${
      apiEndpoints.getAllTBReport
    }?name=${search}${group && `&group=${group}`}${
      subGroup && `&subGroup=${subGroup}`
    }`,
    options
  );
};

const getTBReportDetail = (reportId: string): Promise<Response> => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllTBReport}/${reportId}`,
    options
  );
};

const changeUserGroupAndSubGroup = (
  userId: string,
  group: string,
  subGroup: number
): Promise<Response> => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      group,
      subGroup,
    }),
  };

  return fetch(
    `${
      process.env.NEXT_PUBLIC_BACKEND_URL
    }${apiEndpoints.changeUserGroupAndSubGroup(userId)}`,
    options
  );
};

const getAllNotificationLog = () => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllNotification}`,
    options
  );
};

const getDetailNotificationLog = (id: string) => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getDetailnotification(
      id
    )}`,
    options
  );
};

export {
  getAllUser,
  getUserDetail,
  getAllDailyCheckup,
  getDetailDailyCheckup,
  getAllScreening,
  getScreeningDetail,
  getAllTBReport,
  getTBReportDetail,
  changeUserGroupAndSubGroup,
  getAllNotificationLog,
  getDetailNotificationLog,
};
