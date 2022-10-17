import React from "react";
import {addPostActionCreator, deletePostActionCreator, profileReducer, ProfileType} from "./profileReducer";

test("new post should be added", ()=>{

    let state = {
        profile: {} as ProfileType,
        posts: [
            {id: 1, message: "Hello, how are you?", likesCount: 5},
            {id: 2, message: "How it is going?", likesCount: 8},
        ],
        status: ""
    }

    let newState = profileReducer(state, addPostActionCreator("newPost"))

    expect(newState.posts[2].message).toBe("newPost");
    expect(newState.posts.length).toBe(3);

})

test("post should be deleted", () => {

    let state = {
        profile: {} as ProfileType,
        posts: [
            {id: 1, message: "Hello, how are you?", likesCount: 5},
            {id: 2, message: "How it is going?", likesCount: 8},
        ],
        status: ""
    }

    let newState = profileReducer(state, deletePostActionCreator(2))

    expect(newState.posts[0].message).toBe("Hello, how are you?");
    expect(newState.posts.length).toBe(1);

})