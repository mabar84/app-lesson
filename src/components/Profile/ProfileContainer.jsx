import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {compose} from 'redux';
import {withNavigate} from '../../hoc/withNavigate';

class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log(this.props)
        let userId = this.props.router.params.id;

        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.router.navigate('/login');
            }
        }

        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)

        // setTimeout(() => {
        // }, 2000)
    }

    render() {
            return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateUserStatus={this.props.updateUserStatus}/>
            )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId:state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus}),
    withNavigate
)
(ProfileContainer)
