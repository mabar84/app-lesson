import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hi, world!", like: 58},
        {id: 2, message: "I'm happy", like: 79},
        {id: 3, message: "Yes!", like: 12},
    ],
    newPostText: "",
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: 4, message: state.newPostText, like: 11}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
});

export const setUserStatus = (status) => ({
    type: SET_STATUS,
    status
});

export const getUserProfile = (profileId) => {
    return (dispatch) => {
        usersAPI.getProfile(profileId)
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