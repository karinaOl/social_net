import React from "react";
import {UsersTypeContainer} from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../assets/images/images.png"
import {UserType} from "../../redux/usersReducer";

type UsersAPIResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export class Users extends React.Component<UsersTypeContainer> {

    componentDidMount() {
        axios.get<UsersAPIResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>
            {this.props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                      <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={() => this.props.unfollow(u.id)}>UNFOLLOW</button>
                          : <button onClick={() => this.props.follow(u.id)}>FOLLOW</button>}
                  </div>
              </span>
                <span>
                  <span>
                      <div>{u.name}</div>
                      <div>{u.status}</div>
                  </span>
                  <span>
                      <div>{"u.location.city"}</div>
                      <div>{"u.location.country"}</div>
                  </span>
              </span>
            </div>)}
        </div>
    }
}

