import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    console.log(props.profile)
    return (
        <div>
            <img
                className={s.banner}
                src="https://www.waffarx.com/SiteImages/BannerImages/8201814143755717.jpg"
            />
            <img
                className={s.avatar}
                src={props.profile.photos.large}/>
        </div>
    );
};

export default ProfileInfo;
