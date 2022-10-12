const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: "Саша",
            src: "https://avatarko.ru/img/kartinka/15/film_znamenitost_14478.jpg",
        },
        {
            id: 2,
            name: "Маша",
            src: "https://avatarko.ru/img/avatar/16/film_15559.jpg",
        },
        {
            id: 3,
            name: "Петя",
            src: "https://avatarko.ru/img/kartinka/2/elf_Middle-earth_Legolas_1952.jpg",
        },
        {
            id: 4,
            name: "Вася",
            src: "https://avatarko.ru/img/kartinka/28/film_hobbit_27970.jpg",
        },
        {
            id: 5,
            name: "Света",
            src: "https://avatarko.ru/img/kartinka/1/Arwen.jpg",
        },
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo-yo!!!"},
    ],
    newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, {id: 5, message: state.newMessageText}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.text}
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text,
});

export default dialogsReducer;
