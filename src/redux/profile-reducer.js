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
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost) => ({type: 'ADD_POST', newPost});
export const deletePostActionCreator = (id) => ({type: 'DELETE_POST', id});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile});
export const setUserStatus = (status) => ({type: 'SET_STATUS', status});

export const getUserProfile = (profileId) => {
    return (dispatch) => {
        profileAPI.getProfile(profileId)
            .then(data =>
                dispatch(setUserProfile(data))
            )
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then(response => {
                    dispatch(setUserStatus(response))
                }
            )
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setUserStatus(status))
                    }
                }
            )
    }
}

export default profileReducer;