import React from "react";
import {addPostActionCreator, PostType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootAppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    postData: Array<PostType>
}

type MapDispatchToPropsType = {
    addPost: (newPostText: string)=>void
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: RootAppStateType ) : MapStateToPropsType => {
    return {
        postData: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
  return{
      addPost: (newPostText: string)=>{
          dispatch(addPostActionCreator(newPostText))
      }
  }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


