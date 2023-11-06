import { UserGroup } from "@/type";

const apiEndpoints = {
  login: "/auth/login",
  getAllUser: "/user/all",
  getUserDetail: (id: string) => `/user/${id}`,
  changeUserGroupAndSubGroup: (id: string) => `/user/group-edit/${id}`,
  getAllDailyCheckup: (group: string, subGroup: number, date: string) =>
    `/daily-checkup?group=${group}&subGroup=${subGroup}&date=${date}`,
  getDetailDailyCheckup: (id: string) => `daily-checkup/${id}`,
  getAllScreening: "/screening",
  getScreeningDetail: (id: string) => `/screening/${id}`,
  patchResetPassword: "/auth/reset",
  getAllTBReport: "/tb-report",
  getAllNotificationLog: "/notification/log",
  getDetailnotification: (id: string) => `/notification/log/${id}`,
  getAllMWTHistory: "/mask-tracker/history",
  getDetailMWTHistory: (id: string) => `/mask-tracker/history/${id}`,
  getMWTDownload: "/mask-tracker/download",
  getResponseTimeLogDownload: "/notification/download",
  getScreeningDownload: "/screening/download",
  getUserDownload: "/user/download",
  getDailyCheckupDownload: (group: UserGroup, subGroup: number, date: Date) =>
    `/daily-checkup/download/${group}/${subGroup}/${date.toISOString()}`,
  getTBCDownload: `/tb-report/download`,
  getAllNotificationSchedules: "/notification/schedules",
  getNotificationSchedulesDownload: "/notification/download",
};

export default apiEndpoints;
