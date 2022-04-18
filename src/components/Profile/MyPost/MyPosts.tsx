import React, {ChangeEvent} from "react";
import classes from './MyPost.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostType = {
    postData: Array<PostType>
    message: string
    updateNewPostText:(text:string)=>void
    addPost: ()=> void
}

export const MyPosts = (props: MyPostType) => {

    const onClickHandlerAddPost = () => {
        props.addPost();
    }

    const onChangePostHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.postBlock}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea value={props.message} onChange={onChangePostHandler}/>
                </div>
                <div>
                    <button onClick={onClickHandlerAddPost}>ADD</button>
                </div>
            </div>
            <div>new post</div>
            <div className={classes.post}>

                {props.postData.map(p=><Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)}

            </div>
        </div>
    )
}