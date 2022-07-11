import React from "react";
import ava from "./../assets/images/images.png"

export type SidebarType = {
  id: number
  name: string
  avatarSrc: string
}

type InitialSidebarStateType = {
  friends: SidebarType[]
}

let initialSidebarState: InitialSidebarStateType = {
  friends: [
    {id: 1, name: "Karina", avatarSrc: ava},
    {id: 2, name: "Leha", avatarSrc: ava},
    {id: 3, name: "Margo", avatarSrc: ava},

  ],
}

export const sidebarReducer = (state= initialSidebarState, action: any):InitialSidebarStateType => {
  switch (action.type){
    default:
      return state
  }
}