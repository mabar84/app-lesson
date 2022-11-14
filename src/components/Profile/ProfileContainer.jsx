import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {Navigate, useLocation, useNavigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.id;

        if (!userId) {
            userId = 26454
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
    status: state.profilePage.status
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect)
(ProfileContainer)
