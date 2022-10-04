import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.profilePage.posts.map((p) => (
    <Post message={p.message} like={p.like} id={p.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    // let text = newPostElement.current.value;
    // if (!text == "") {
    // props.addPost();
    props.dispatch(addPostActionCreator());
    // }
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // props.updateNewPostText(text);

    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.MyPosts}>
      <h3>My posts</h3>
      <div>
        <textarea
          value={props.profilePage.newPostText}
          ref={newPostElement}
          className="textarea"
          onChange={onPostChange}
        />
      </div>
      <div>
        <button onClick={addPost} className="button">
          Add post
        </button>
      </div>

      {posts}
    </div>
  );
};

export default MyPosts;
