import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.router.params.id;

        if (!profileId) {
            profileId = 2
        }

        usersAPI.getProfile(profileId)
            .then(data => this.props.setUserProfile(data)
            )

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId)
        //     .then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }

    //  componentDidUpdate(prevProps) {
//        let userId = this.props.router.params.userId;
    // if (prevProps.router.params.userId !== userId) {
    //     let userId = 7274;
    //
    //     usersAPI.getProfile(userId)
    //         .then(data => this.props.setUserProfile(data)
    //         )
    //
    //     // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    //     //     .then((res) => {
    //     //         this.props.setUserProfile(res.data);
    //     //     });
    // }
    //}

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
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


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
