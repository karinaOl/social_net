import React from "react";
import {addPostActionCreator, changeNewTextActionCreator, PostType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootAppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    postData: Array<PostType>
    message: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string)=>void
    addPost: ()=>void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootAppStateType ) : MapStateToPropsType => {
    return {
        postData: state.profilePage.posts,
        message: state.profilePage.messageForNewPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
  return{
      updateNewPostText: (text: string)=>{
          let action = changeNewTextActionCreator(text)
          dispatch(action)
      },
      addPost: ()=>{
          dispatch(addPostActionCreator())
      }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


