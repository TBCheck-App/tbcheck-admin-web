const apiEndpoints = {
  login: "/auth/login",
  getAllUser: "/user/all",
  getUserDetail: (id: string) => `/user/${id}`,
  getAllDailyCheckup: (group: string, subGroup: number, date: string) =>
    `/daily-checkup?group=${group}&subGroup=${subGroup}&date=${date}`,
};

export default apiEndpoints;
