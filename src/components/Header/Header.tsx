import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderType) => {
    return(
        <header className={style.header}>

            YELLOW

            <div className={style.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={"./login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}