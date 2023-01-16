import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/small.png';


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <img alt={'banner'}
                 className={s.banner}
                 src="https://www.waffarx.com/SiteImages/BannerImages/8201814143755717.jpg"
            />
            <img
                className={s.avatar}
                src={profile.photos.large || userPhoto} alt={'avatar'}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        </div>
    );
};

export default ProfileInfo;