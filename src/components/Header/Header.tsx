import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderType = {
    isAuth: boolean
    login: string
    logout: () => void
}

export const Header = (props: HeaderType) => {
    return(
        <header className={style.header}>

            YELLOW

            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div> {props.login} -<button onClick={props.logout}>Log out</button> </div>
                        : <NavLink to={"./login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}