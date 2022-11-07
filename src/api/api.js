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
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId = 2) {
        console.warn('Obsolete method. Please, use profile object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getUserStatus(userId = 2) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateUserStatus(status) {
        console.log('Go to update')
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}