import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';

const ProfileInfo = ({profile,status,updateUserStatus}) => {
    if (!profile ) {
        return <Preloader/>
    }
    return (
        <div>
            <img alt={'banner'}
                className={s.banner}
                src="https://www.waffarx.com/SiteImages/BannerImages/8201814143755717.jpg"
            />
            <img
                className={s.avatar}
                src={profile.photos.large} alt={'avatar'}/>
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        </div>
    );
};

export default ProfileInfo;