import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from '../../redux/profile-reducer';
import {compose} from 'redux';
import {withNavigate} from '../../hoc/withNavigate';

class ProfileContainer extends React.Component {

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.id !== prevProps.router.params.id) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile
                isOwner={!this.props.router.params.id}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
                {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withNavigate
)
(ProfileContainer)
