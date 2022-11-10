import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {

    const onSubmit = (values) => {
        props.addPost(values.myPostsTextarea)
        values.myPostsTextarea = ''
    }

    let posts = props.posts.map((p, index) => (
        <Post message={p.message} like={p.like} id={p.id} key={index}/>
    ));

    return (
        <div className={s.MyPosts}>
            <h3>My posts</h3>
            <MyPostsForm onSubmit={onSubmit}/>
            {posts}
        </div>
    );
};

let MyPostsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'myPostsTextarea'} />
        </div>
        <div>
            <button className="button">
                Add post
            </button>
        </div>
    </form>
}

MyPostsForm = reduxForm({form: 'myPosts' })(MyPostsForm)

export default MyPosts;
