import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className="">
        <img
          className={s.avatar}
          src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614595664_110-p-smail-na-belom-fone-113.png"
          alt="ava"
        />
      </div>
      <span>{props.message}</span>
      <p>like {props.like}</p>
    </div>
  );
};

export default Post;
