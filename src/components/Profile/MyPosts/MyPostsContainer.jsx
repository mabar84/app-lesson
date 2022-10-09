import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  //console.log(props.store)

  let state = props.store

  console.log(state)

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text)
    props.store.dispatch(action)
  };

  return ( <MyPosts updateNewPostText={ onPostChange }  addPost={addPost} posts={props.store.profilePage.posts} newPostText={props.store.profilePage.newPostText} /> );
};

export default MyPostsContainer;
