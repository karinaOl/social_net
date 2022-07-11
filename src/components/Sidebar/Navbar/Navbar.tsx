import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={'/profile'} className={classes.navLink} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/dialogs'} className={classes.navLink} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/users'} className={classes.navLink} activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/news'} className={classes.navLink} activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/music'} className={classes.navLink} activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/settings'} className={classes.navLink} activeClassName={classes.active}>Settings</NavLink>
            </div>
        </nav>
    )
}