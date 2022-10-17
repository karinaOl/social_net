import React from "react";
import classes from './MyPost.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddNewPostFormDataType, AddNewPostReduxForm} from "./AddNewPostForm/AddNewPostForm";


export const MyPosts = React.memo((props: MyPostsPropsType) => {

    const addNewPost = (values: AddNewPostFormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={classes.postBlock}>
            <h2>My post</h2>
            <div>
                <AddNewPostReduxForm onSubmit={addNewPost}/>
            </div>
            <div className={classes.post}>
                {props.postData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                               likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
})