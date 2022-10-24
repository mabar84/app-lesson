import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '913ce367-8c9f-4b2c-b37a-28fb1036005b'}
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(profileId = 2) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getAuthData() {
        console.log('pros get')
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}