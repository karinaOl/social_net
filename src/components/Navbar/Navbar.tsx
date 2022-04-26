import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {

    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={'/profile'} className = { navData => navData.isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/dialogs'} className = { navData => navData.isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/users'} className = { navData => navData.isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/news'} className = { navData => navData.isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/music'} className = { navData => navData.isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={'/settings'} className = { navData => navData.isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}>Settings</NavLink>
            </div>
        </nav>
    )
}