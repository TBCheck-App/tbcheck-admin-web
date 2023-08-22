const apiEndpoints = {
  login: "/auth/login",
  getAllUser: "/user/all",
  getUserDetail: (id: string) => `/user/${id}`,
  getAllDailyCheckup: "/daily-checkup",
};

export default apiEndpoints;
