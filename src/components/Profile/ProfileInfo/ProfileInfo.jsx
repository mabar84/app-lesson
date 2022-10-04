import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <img
        className={s.banner}
        src="https://www.waffarx.com/SiteImages/BannerImages/8201814143755717.jpg"
      />
      <img
        className={s.avatar}
        src="https://avatarko.ru/img/kartinka/1/pozitiv_smailik.jpg"
      />
    </div>
  );
};

export default ProfileInfo;
