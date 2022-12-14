import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {compose} from 'redux';
import {withNavigate} from '../../hoc/withNavigate';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.id;

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.router.navigate('/login');
            }
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        // console.log('RENDER PROFILE')
            return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            )
    }
}

let mapStateToProps = (state) => {
    // console.log('mapStateToProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus}),
    withNavigate
)
(ProfileContainer)
