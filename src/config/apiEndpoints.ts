const apiEndpoints = {
  login: "/auth/login",
  getAllUser: "/user/all",
  getUserDetail: (id: string) => `/user/${id}`,
  getAllDailyCheckup: (group: string, subGroup: number, date: string) =>
    `/daily-checkup?group=${group}&subGroup=${subGroup}&date=${date}`,
  getDetailDailyCheckup: (id: string) => `daily-checkup/${id}`,
  getAllScreening: "/screening",
  getScreeningDetail: (id: string) => `/screening/${id}`,
  patchResetPassword: "/auth/reset",
  getAllTBReport: "/tb-report",
};

export default apiEndpoints;
