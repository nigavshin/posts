import { NavLink } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

function NavBar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      {isAuth && (
        <MyButton
          style={{ position: "absolute", right: "0.5rem" }}
          onClick={logout}
        >
          Выйти
        </MyButton>
      )}

      <ul className="navbar__links">
        <li className="navbar__item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar__link--active" : "navbar__link"
            }
          >
            О Сайте
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            to="/posts"
            className={({ isActive }) =>
              isActive ? "navbar__link--active" : "navbar__link"
            }
          >
            Посты
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
