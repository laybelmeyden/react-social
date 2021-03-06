import "./../../App.scss";
import scssNavbar from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={scssNavbar.background__img}></div>
      <div className={scssNavbar.navbar}>
        <div className={`container ${scssNavbar.grid__container}`}>
          <div></div>
          <div className={scssNavbar.item__links}>
            <NavLink exact to="/">Профиль</NavLink>
            <NavLink to="/messages">Сообщения</NavLink>
            <NavLink to="/friends">Друзья</NavLink>
            {/* <a>Настройки</a> */}
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
