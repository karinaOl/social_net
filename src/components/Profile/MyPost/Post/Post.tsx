import React from "react";
import classes from './Post.module.css'
import {PostType} from "../../../../redux/profileReducer";

type PostPropsType = PostType

export const Post = (props: PostPropsType) => {
    return (
        <div className={classes.item}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrrxsxZSpsfebkw8VLXe6R5j7mryT6PK7Pg&usqp=CAU'}/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}