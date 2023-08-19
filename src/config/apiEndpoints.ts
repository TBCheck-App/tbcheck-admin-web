const apiEndpoints = {
  login: "/auth/login",
  getAllUser: "/user/all",
  getUserDetail: (id: string) => `/user/${id}`,
};

export default apiEndpoints;
