import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/small.png';
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState()

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <img alt={'banner'}
                 className={s.banner}
                 src="https://www.waffarx.com/SiteImages/BannerImages/8201814143755717.jpg"
            />

            {editMode ? <ProfileDataForm setEditMode={setEditMode} onSubmit={onSubmit} initialValues={profile}
                                         profile={profile}/> :
                <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}

            <img
                className={s.avatar}
                src={profile.photos.large || userPhoto} alt={'avatar'}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus}/>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <button onClick={goToEditMode}>Edit</button>}
        <p><b>Full name:</b> {profile.fullName}</p>
        <p><b>About me:</b> {profile.aboutMe ? profile.aboutMe : 'while empty'}</p>
        <b>Contacts:</b> {Object.keys(profile.contacts).map((el) => {
        return <Contact contactTitle={el} contactValue={profile.contacts[el]} key={el}/>
    })}

        <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
        <br/>
        <b>Job description:</b> {profile.lookingForAJobDescription}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <p className={s.contact}>
        {contactTitle}: {contactValue}
    </p>
}


export default ProfileInfo;