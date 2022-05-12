import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderType = {
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderType) => {
    return(
        <header className={classes.header}>


            <div className={classes.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink to={"./login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}