import { Link } from "react-router-dom";
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
      <MyButton onClick={logout}>Выйти</MyButton>
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link className="navbar__link" to="/about">
            О Сайте
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/posts">
            Посты
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
