import axios from "axios";
import { FormDataType } from "../components/login/Login";
export type ResponseDataFollowUnfollow = {
  data: {};
  fieldsErrors: [];
  messages: [];
  resultCode: number;
};

const settings = {
  withCredentials: true,
  API_KEY: "fb565e66-163c-404a-8bfa-c7212c08dd95",
};
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  ...settings,
});

export const userApi = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then((res) => res.data);
  },
  setChangePage(page: number, pageSize: number) {
    return instance.get(`/users?page=${page}&count=${pageSize}`).then((res) => res.data);
  },
  following(id: number) {
    return instance.post<ResponseDataFollowUnfollow>(`follow/${id}`).then((res) => res.data);
  },
  unFollowing(id: number) {
    return instance.delete<ResponseDataFollowUnfollow>(`follow/${id}`).then((res) => res.data);
  },
};
export const profileApi = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status });
  },
};
export const authApi = {
  authMe() {
    return instance.get(`/auth/me`).then((res) => res.data);
  },
  login(data: FormDataType) {
    return instance.post("auth/login", data);
  },
  logout() {
    return instance.delete("auth/login");
  },
};
