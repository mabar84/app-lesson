import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let posts = props.posts.map((p,index) => (
    <Post message={p.message} like={p.like} id={p.id} key={index} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
     props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.MyPosts}>
      <h3>My posts</h3>
      <div>
        <textarea
          value={props.newPostText}
          ref={newPostElement}
          className="textarea"
          onChange={onPostChange}
        />
      </div>
      <div>
        <button onClick={onAddPost} className="button">
          Add post
        </button>
      </div>

      {posts}
    </div>
  );
};

export default MyPosts;
