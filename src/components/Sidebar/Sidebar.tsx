import style from "./Sidebar.module.css"
import {SidebarType} from "../../redux/sidebarReducer";
import {Navbar} from "./Navbar/Navbar";

type SidebarPropsType = {
    friends: SidebarType[]
}

export const Sidebar = (props: SidebarPropsType) => {
    const friendsElements = props.friends.map(el =>
        <div key={el.id} className={style.friend}>
            <img src={el.avatarSrc} alt={el.name + "'s Avatar"}/>
            <p>{el.name}</p>
        </div>
    );

    return (
        <div className={style.sidebar}>
            <Navbar/>
            <div className={style.friendsList}>
                {friendsElements}
            </div>
        </div>
    );
}