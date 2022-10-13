import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: "Dmitry",
                photoURL: 'https://i.pinimg.com/236x/9b/cf/90/9bcf904ef8bfe82dceaf70a8fde3725f--fasion-avatar.jpg',
                status: 'My cool status',
                location: {country: 'Belarus', city: 'Minsk'}
            },
            {
                id: 2,
                followed: true,
                fullName: "Robot",
                photoURL: 'https://i.pinimg.com/236x/9b/cf/90/9bcf904ef8bfe82dceaf70a8fde3725f--fasion-avatar.jpg',
                status: 'Who am i?',
                location: {country: 'Narniya', city: 'Luna'}
            },
            {
                id: 3,
                followed: false,
                fullName: "Gena",
                photoURL: 'https://i.pinimg.com/236x/9b/cf/90/9bcf904ef8bfe82dceaf70a8fde3725f--fasion-avatar.jpg',
                status: 'Kshe psheno',
                location: {country: 'Poland', city: 'Krakov'}
            }
        ])
    }

    return <div>
        {
            props.users.map((u, index) => <div className={s.user} key={index}>
                <img src={u.photoURL} className={s.userPhoto}/>
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
                <p>{u.fullName}</p>
                <p>{u.status}</p>
                <p>{u.location.city}</p>
                <p>{u.location.country}</p>
            </div>)
        }
    </div>
};

export default Users;
