import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '0c05ac6b-5e3e-4b36-9db5-22b60756c580'}
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
    }
}
// Example
const prof = {
    "aboutMe": 'qwe9.00',
    "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
    },
    "lookingForAJob": false,
    "lookingForAJobDescription": '???',
    "fullName": "mabaron",
    "userId": 26454,
    "photos": {
        "small": "https://social-network.samuraijs.com/activecontent/images/users/26454/user-small.jpg?v=22",
        "large": "https://social-network.samuraijs.com/activecontent/images/users/26454/user.jpg?v=22"
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
        return instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    },
    savePhoto(file) {
        const formData = new FormData()
        formData.append("image", file)
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile(profile) {
        return instance.put('profile/', profile)
        // .then(response => response.data)
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
}