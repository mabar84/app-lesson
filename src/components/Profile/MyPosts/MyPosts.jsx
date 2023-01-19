import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utilites/validators/validators';
import {FormField} from '../../common/FormsControls/FormsControls';

let MyPosts = React.memo(props => {

    const onSubmit = (values) => {
        values.myPostsTextarea && props.addPost(values.myPostsTextarea)
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
})

const maxLength = maxLengthCreator(10)

let MyPostsForm = React.memo(props => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field elem={'textarea'} component={FormField} placeholder={'your post'}
                   name={'myPostsTextarea'} validate={[required, maxLength]}
            />
        </div>
        <div>
            <button className="button">
                Add post
            </button>
        </div>
    </form>
});

MyPostsForm = reduxForm({form: 'myPosts'})(MyPostsForm)

export default MyPosts;
