import {profileAPI} from '../api/api';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, world!', like: 58},
        {id: 2, message: 'I\'m happy', like: 79},
        {id: 3, message: 'Yes!', like: 12},
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
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
};

export const addPostActionCreator = (newPost) => ({type: 'ADD_POST', newPost});
export const deletePostActionCreator = (id) => ({type: 'DELETE_POST', id});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setUserStatus = (status) => ({type: 'SET_STATUS', status});
export const savePhotoSuccess = (photos) => ({type: 'SAVE_PHOTO_SUCCESS', photos});

export const getUserProfile = (profileId) => {
    return async (dispatch) => {
        const response = await profileAPI.getProfile(profileId)
        dispatch(setUserProfile(response))
    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getUserStatus(userId)
        dispatch(setUserStatus(response))
    }
}
export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateUserStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}
export const savePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.savePhoto(file)
        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
        }
    }
}

export default profileReducer;