import React, {ChangeEvent} from "react";
import classes from './MyPost.module.css'
import {Post} from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";
import { addPostActionCreator, changeNewTextActionCreator } from "../../../redux/profileReducer";


type MyPostType = {
    postData: Array<PostType>
    message: string
    dispatch: (action: ActionType)=>void
}

export const MyPost = (props: MyPostType) => {

    const onClickHandlerAddPost = () => {
        props.dispatch(addPostActionCreator())

    }

    const onChangePostHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch(changeNewTextActionCreator(e.currentTarget.value))
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