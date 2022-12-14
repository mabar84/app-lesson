import React from 'react';
import {connect} from 'react-redux';
import {follow, getUsersThunk, toggleFollowingProgress, unfollow} from '../../redux/users-reducer';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getpageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        console.log('RENDER USERS')
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    console.log('MSTP USERS')
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getpageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsers: getUsersThunk}),
)(UsersContainer)