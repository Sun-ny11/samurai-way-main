import axios from "axios";

const settings = {
   withCredentials: true,
   API_KEY: "fb565e66-163c-404a-8bfa-c7212c08dd95"
}
const instance = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.0",
   ...settings
})


export const userApi = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
         .then(res => res.data)
   },
   changePage(page: number, pageSize: number) {
      return instance.get(`/users?page=${page}&count=${pageSize}`)
         .then(res => res.data)
   },
   following(id:number){
      return instance.post(`follow/${id}`)
      .then(res=>res.data)
   },
   unFollowing(id:number){
      return instance.delete(`follow/${id}`)
      .then(res=>res.data)
   },

}
export const profileApi = {
   getProfile(userId:number){
      return instance.get(`profile/${userId}`)
   },
}
export const authApi = {
   authMe() {
      return instance.get(`/auth/me`)
         .then(res => res.data)
   },
}