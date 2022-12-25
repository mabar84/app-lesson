import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({users,followingInProgress,follow,unfollow,...props}) => {

    return <div>
        <Paginator {...props}/>
        {users.map((u) => <User key={u.id}
                                user={u}
                                follow={follow}
                                unfollow={unfollow}
                                followingInProgress={followingInProgress}
        />)}
    </div>
}

export default Users