import React from "react";
import ava from "./../assets/images/images.png"



let initialSidebarState: InitialSidebarStateType = {
  friends: [
    {id: 1, name: "Karina", avatarSrc: ava},
    {id: 2, name: "Leha", avatarSrc: ava},
    {id: 3, name: "Margo", avatarSrc: ava},

  ],
}

export const sidebarReducer = (state= initialSidebarState, action: SideBarActionType):InitialSidebarStateType => {
  switch (action.type){
    default:
      return state
  }
}

//actions
const action = () => ({type: "TEST"} as const)


//types
export type SidebarType = {
  id: number
  name: string
  avatarSrc: string
}

type InitialSidebarStateType = {
  friends: SidebarType[]
}

export type SideBarActionType = ReturnType<typeof action>
