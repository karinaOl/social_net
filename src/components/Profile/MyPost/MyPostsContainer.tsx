import React from "react";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


type MyPostsContainer = {

}

export const MyPostsContainer = (props: MyPostsContainer) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())

                }
                const onChangePostHandler = (text: string) => {
                    let action = changeNewTextActionCreator(text)
                    store.dispatch(action)
                }
                return (
                    <MyPosts postData={store.getState().profilePage.posts}
                             message={store.getState().profilePage.messageForNewPost}
                             updateNewPostText={onChangePostHandler}
                             addPost={addPost}/>
                )
            }}
        </StoreContext.Consumer>
    )
}