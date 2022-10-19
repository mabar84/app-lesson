import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/small.png";
import {NavLink} from "react-router-dom";

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
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
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