import {profileAPI} from '../api/api';
import {stopSubmit} from "redux-form";

let initialState = {
    posts: [
        {id: 1, message: 'Hi, world!', like: 58},
        {id: 2, message: 'I\'m happy', like: 79},
        {id: 3, message: 'Yes!', like: 12},
    ],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: '',
        photos: {
            small: '',
            large: '',
        }
    },
    status: ''
}

type PostsType = Array<{
    id: number
    message: string
    like: number
}>

type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}


type InitialStateType = {
    posts: PostsType
    profile: ProfileType
    status: string
}

const profileReducer = (state = initialState, action: ProfileReducerActionType) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: [{id: 4, message: action.newPost, like: 11}, ...state.posts]
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        case 'SET_USER_PROFILE':
            return {...state, profile: action.profile}
        case 'SET_STATUS':
            return {...state, status: action.status}
        case 'SAVE_PHOTO_SUCCESS':
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}


type ProfileReducerActionType = {
    type: string
    newPost: string
    id: number
    profile: ProfileType
    status: string
    photos: string
}

export const addPostActionCreator = (newPost: string) => ({type: 'ADD_POST', newPost});
export const deletePostActionCreator = (id: number) => ({type: 'DELETE_POST', id});
export const setUserProfile = (profile: any) => ({type: 'SET_USER_PROFILE', profile});
export const setUserStatus = (status: string) => ({type: 'SET_STATUS', status});
export const savePhotoSuccess = (photos: any) => ({type: 'SAVE_PHOTO_SUCCESS', photos});

export const getUserProfile = (profileId: number) => {
    return async (dispatch: any) => {
        const response = await profileAPI.getProfile(profileId)
        dispatch(setUserProfile(response))
    }
}
export const getUserStatus = (userId: number) => {
    return async (dispatch: any) => {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(response))
    }
}
export const updateUserStatus = (status: string) => {
    return async (dispatch: any) => {
        try {
            const response = await profileAPI.updateUserStatus(status)
            if (response.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        } catch (error) {
            //
        }


    }
}
export const savePhoto = (file: any) => {
    return async (dispatch: any) => {
        const response = await profileAPI.savePhoto(file)
        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
        }
    }
}
export const saveProfile = (profile: any) => {
    return async (dispatch: any, getState: any) => {
        //const userId = getState().auth.id
        const response = await profileAPI.saveProfile(profile)

        if (response.data.resultCode === 0) {
            //диспатчу в BLL данные профиля
            dispatch(setUserProfile(profile))
            // диспатчим запрос данных профился с сервера, так правильнее, страндартный flow, но дольше
            // dispatch(getUserProfile(userId))
        } else {
            // dispatch(stopSubmit('edit-profile', {'contacts': {'facebook': response.data.messages[0]}}))
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
            return Promise.reject()
        }
    }
}

export default profileReducer;
