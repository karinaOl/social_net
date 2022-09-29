import React from 'react';
import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {ProfileType} from "../redux/profileReducer";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a80bdfa8-8441-4a9e-ae79-8101c26ab2d0"
    }
})

type APIResponseDataType<T = {}> = {
    data: T
    resultCode: number
    messages: Array<string>
}

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
            .then(response =>response.data)
    },
    follow(userID: number){
        return instance.post<FollowAPIResponseType>(`follow/${userID}`, {})
            .then(response => response.data)
    }
};

type ProfileAPIResponseType = ProfileType;

export const profileApi = {
    getUserProfile(userID: string){
        return instance.get<ProfileAPIResponseType>(`profile/${userID}`)
            .then( response=> response.data)
    },
    getUserStatus(userID: string){
        return instance.get(`profile/status/${userID}`)
            .then( response => response.data)
    },
    updateUserStatus(status: string){
        return instance.put<APIResponseDataType>("profile/status", {status: status})
            .then( response => response.data)
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



