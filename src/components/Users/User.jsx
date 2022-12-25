import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/small.png';
import {NavLink} from 'react-router-dom';

let User = ({user,...props}) => {

    return  <div className={s.user}>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null
                        ? user.photos.small
                        : userPhoto}
                         className={s.userPhoto} alt={"avatar"}/>
                </NavLink>

                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.unfollow(user.id)
                                  }}>
                            Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      props.follow(user.id)
                                  }}>
                            Follow</button>
                    }
                </div>
                <p>{user.name}</p>

                {/*<p>{user.status}</p>*/}
                <p>{'user.location.city'}</p>
                <p>{'user.location.country'}</p>
            </div>
}

export default User