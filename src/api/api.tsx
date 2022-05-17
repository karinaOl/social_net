import React from 'react';
import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {ProfileType} from "../redux/profileReducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "21db99da-e3b9-4d8a-b289-1f482b433dd9"
    }
})

type UsersAPIResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10){
        return instance.get<UsersAPIResponseType>(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
    }
}

type FollowAPIResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
};

export const followAPI = {
    unfollow(userID: number){
        return instance.delete<FollowAPIResponseType>(`follow/${userID}`)
            .then(response =>{
                return response.data
            })
    },
    follow(userID: number){
        return instance.post<FollowAPIResponseType>(`follow/${userID}`, {})
            .then(response =>{
                return response.data
            })
    }
};

type ProfileAPIResponseType = ProfileType;

export const profileApi = {
    getUsersProfile(userID: string){
        return instance.get<ProfileAPIResponseType>(`profile/` + userID)
            .then( response=> response.data)
    }
}

type AuthHeaderAPIResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}

export const authAPI = {
    getAuth(){
        return instance.get<AuthHeaderAPIResponseType>(`auth/me`)
            .then(response => response.data)
    }
}



