import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, world!", like: 58 },
        { id: 2, message: "I'm happy", like: 79 },
        { id: 3, message: "Yes!", like: 12 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo-yo!!!" },
      ],
      newMessageText: "",
    },
    sidebar: {
      friendsData: [
        {
          id: 1,
          name: "Петя",
          src: "https://avatarko.ru/img/kartinka/8/kot_prikol_gitara_7515.jpg",
        },
        {
          id: 2,
          name: "Федя",
          src: "https://avatarko.ru/img/kartinka/3/kot_muzhchina_prikol_2433.jpg",
        },
        {
          id: 3,
          name: "Коля",
          src: "https://avatarko.ru/img/kartinka/18/film_uzhasy_shlyapa_ulybka_17247.jpg",
        },
        {
          id: 4,
          name: "Сидор",
          src: "https://avatarko.ru/img/kartinka/8/film_prikol_gnom_7810.jpg",
        },
        {
          id: 5,
          name: "Прохор",
          src: "https://avatarko.ru/img/kartinka/23/prikol_cosplay_morskaya_svinka_22453.jpg",
        },
      ],
    },
  },
  _callSubscriber() {}, //Заглушка

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // налбюдатель паттерн // publisher-subscriber
  },

  addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      like: 11,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(text) {
    this._state.dialogsPage.newMessageText = text;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
