import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import clsx from "clsx";
import UserMenu from "../UserMenu/UserMenu";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const AuthNav = () => {
  return (
    <header className={styles.header}>
      <UserMenu />
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthNav;
