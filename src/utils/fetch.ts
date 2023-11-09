import apiEndpoints from "@/config/apiEndpoints";
import { Token, UserGroup } from "@/type";

const getAllUser = (
  name: string,
  group: string,
  subGroup: string,
  page: number = 1
): Promise<Response> => {
  let query = "";

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

  if (
    query.includes("name") ||
    query.includes("group") ||
    query.includes("subGroup")
  ) {
    query += `&page=${page}`;
  } else {
    query += `page=${page}`;
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  const queryParam = query != "" ? `?${query}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllUser}${queryParam}`,
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
  let query: string[] = [];

  if (name != "") {
    query.push(`name=${name}`);
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  const queryParam = query.length > 0 ? `&${query.join("&")}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllDailyCheckup(
      group,
      subGroup,
      date
    )}${queryParam}`,
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

const getAllScreening = (
  name: string,
  group: string,
  subGroup: string
): Promise<Response> => {
  let query: string[] = [];

  if (name != "") {
    query.push(`name=${name}`);
  }

  if (group != "") {
    query.push(`group=${group}`);
  }

  if (subGroup != "") {
    query.push(`subGroup=${subGroup}`);
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  const queryParam = query.length > 0 ? `?${query.join("&")}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllScreening}${queryParam}`,
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

const getAllNotificationLog = (page: number) => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllNotificationLog}?page=${page}`,
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

const getAllMWTHistory = (group: string, subGroup: string) => {
  let query = "";

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

  const queryParam = query != "" ? `?${query}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllMWTHistory}${queryParam}`,
    options
  );
};

const getDetailMWTHistory = (id: string) => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getDetailMWTHistory(
      id
    )}`,
    options
  );
};

const getMWTReports = (group: string, subGroup: string) => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getMWTDownload(
      group,
      subGroup
    )}`,
    options
  );
};

const getResponseTimeReports = (group: string, subGroup: string) => {
  let query: string[] = [];

  if (group != "") {
    query.push(`group=${group}`);
  }

  if (subGroup != "") {
    query.push(`subGroup=${subGroup}`);
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  const queryParam = query.length > 0 ? `?${query.join("&")}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getResponseTimeLogDownload}${queryParam}`,
    options
  );
};

const getScreeningReports = (group: string, subGroup: string) => {
  let query: string[] = [];

  if (group != "") {
    query.push(`group=${group}`);
  }

  if (subGroup != "") {
    query.push(`subGroup=${subGroup}`);
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  const queryParam = query.length > 0 ? `?${query.join("&")}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getScreeningDownload}${queryParam}`,
    options
  );
};

const getUserData = (group: string, subGroup: string) => {
  let query: string[] = [];

  if (group != "") {
    query.push(`group=${group}`);
  }

  if (subGroup != "") {
    query.push(`subGroup=${subGroup}`);
  }

  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  const queryParam = query.length > 0 ? `?${query.join("&")}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getUserDownload}${queryParam}`,
    options
  );
};

const getDailyCheckupReports = (
  group: UserGroup,
  subGroup: 1 | 2,
  date: Date
) => {
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
    }${apiEndpoints.getDailyCheckupDownload(group, subGroup, date)}`,
    options
  );
};

const getTBCReports = (group: string, subGroup: string) => {
  let query = "";

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

  const queryParam = query != "" ? `?${query}` : "";

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getTBCDownload}${queryParam}`,
    options
  );
};

const getAllNotifications = () => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllNotificationSchedules}`,
    options
  );
};

const getNotificationSchedulesReports = () => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getNotificationSchedulesDownload}`,
    options
  );
};

const getAllDailyCheckupReports = () => {
  const token = JSON.parse(localStorage.getItem("token")!);

  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${(token as Token).token}`,
    },
  };

  return fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}${apiEndpoints.getAllDailyCheckupDownload}`,
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
  getAllMWTHistory,
  getDetailMWTHistory,
  getMWTReports,
  getResponseTimeReports,
  getScreeningReports,
  getUserData,
  getDailyCheckupReports,
  getTBCReports,
  getAllNotifications,
  getNotificationSchedulesReports,
  getAllDailyCheckupReports,
};
