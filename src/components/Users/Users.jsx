import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/small.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <React.Fragment key={p}>
                    <span className={`${s.cupo} ${props.currentPage === p ? s.selectedPage : ''}`}
                          onClick={
                              () => {
                                  props.onPageChanged(p)
                              }
                          }
                    >{p}</span>
                    <span> </span>
                </React.Fragment>
            })}
        </div>
        {
            props.users.map((u) => <div className={s.user} key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}
                         alt={"avatar"}/>
                </NavLink>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {'API-KEY': '913ce367-8c9f-4b2c-b37a-28fb1036005b'}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>Unfollow</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {'API-KEY': '913ce367-8c9f-4b2c-b37a-28fb1036005b'}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }}>Follow</button>
                    }
                </div>
                <p>{u.name}</p>

                {/*<p>{u.status}</p>*/}
                <p>{'u.location.city'}</p>
                <p>{'u.location.country'}</p>
            </div>)
        }
    </div>
}

export default Users