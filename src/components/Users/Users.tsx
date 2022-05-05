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
        axios.get<UsersAPIResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
        });
    }

    onPageChanged = (currentPage:number) => {
        this.props.setCurrentPage(currentPage)
        axios.get<UsersAPIResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);

        let pages: number[] = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ""}
                    onClick={()=>{this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
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

