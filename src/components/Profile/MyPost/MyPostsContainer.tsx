import React from "react";
import {ActionType, PostType} from "../../../redux/state";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {RootStoreType} from "../../../redux/reduxStore";


type MyPostsContainer = {
    store: RootStoreType
}

export const MyPostsContainer = (props: MyPostsContainer) => {


    const addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    const onChangePostHandler = (text: string) => {
        let action = changeNewTextActionCreator(text)
        props.store.dispatch(action)
    }

    return <MyPosts postData={props.store.getState().profilePage.posts}
                    message={props.store.getState().profilePage.messageForNewPost}
                    updateNewPostText={onChangePostHandler}
                    addPost={addPost}/>
}