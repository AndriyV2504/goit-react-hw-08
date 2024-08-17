import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div>Navigation</div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink className={buildLinkClass} to="/">
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/contacts">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
