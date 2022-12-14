import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile ) {
    // if (!props.profile || !props.status) {
        return <Preloader/>
    }
    return (
        <div>
            <img
                className={s.banner}
                src="https://www.waffarx.com/SiteImages/BannerImages/8201814143755717.jpg"
            />
            <img
                className={s.avatar}
                src={props.profile.photos.large} alt={'profile-photo'}/>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    );
};

export default ProfileInfo;