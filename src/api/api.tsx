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

export const followAPI = {
    unfollow(userID: number){
        return instance.delete<CommonAPIResponseDataType>(`follow/${userID}`)
            .then(response =>response.data)
    },
    follow(userID: number){
        return instance.post<CommonAPIResponseDataType>(`follow/${userID}`, {})
            .then(response => response.data)
    }
};


export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10){
        return instance.get<UsersAPIResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const profileApi = {
    getUserProfile(userID: string){
        return instance.get<ProfileAPIResponseType>(`profile/${userID}`)
            .then( response=> response.data)
    },
    getUserStatus(userID: string){
        return instance.get<string>(`profile/status/${userID}`)
            .then( response => response.data)
    },
    updateUserStatus(status: string){
        return instance.put<CommonAPIResponseDataType>("profile/status", {status: status})
            .then( response => response.data)
    }
}

export const authAPI = {
    getAuth(){
        return instance.get<CommonAPIResponseDataType<AuthAPIDataType>>(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean){
        return instance.post<CommonAPIResponseDataType<{id: number}>>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout(){
        return instance.delete<CommonAPIResponseDataType>(`auth/login`)
            .then(response => response.data)
    }

}

//types
type CommonAPIResponseDataType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

type UsersAPIResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

type ProfileAPIResponseType = ProfileType;

type AuthAPIDataType = {
    id: number
    email: string
    login: string
};



