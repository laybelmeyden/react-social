import "./../App.scss";
import scssNavbar from "./../css_modules/Navbar.module.scss";

const Navbar = () => {
  return (
    <div>
      <div className={scssNavbar.background__img}></div>
      <div className={scssNavbar.navbar}>
        <div className={`container ${scssNavbar.grid__container}`}>
          <div></div>
          <div className={scssNavbar.item__links}>
            <a href="#/">Профиль</a>
            <a href="#/">Сообщения</a>
            <a href="#/">Новости</a>
            <a href="#/">Музыка</a>
            <a href="#/">Настройки</a>
          </div>
          <div className={scssNavbar.item__btns}>
            <button>Редатировать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
