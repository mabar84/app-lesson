const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState={
  posts: [
    { id: 1, message: "Hi, world!", like: 58 },
    { id: 2, message: "I'm happy", like: 79 },
    { id: 3, message: "Yes!", like: 12 },
  ],
  newPostText: "",
}

const profileReducer = (state=initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        like: 11,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});

export default profileReducer;
