import "./../App.scss";
import scssProfile from "./../css_modules/Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <div className={`container ${scssProfile.grid__container}`}>
        <div className={scssProfile.item__left}>
          <div className={scssProfile.profile__img}>
            <img src="" alt="" />
          </div>
            <div className={scssProfile.profile__info}>
                dasd
            </div>
        </div>
        <div className={scssProfile.item__center}>
            <div className={scssProfile.publisher__input}>
                center publish
            </div>
            <div className={scssProfile.publisher__post}>
                center publish
            </div>
        </div>
        <div className={scssProfile.item__right}>right</div>
      </div>
    </div>
  );
};

export default Profile;
