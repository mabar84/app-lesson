import { NavLink } from "react-router-dom";
import BestFriends from "../Friends/BestFriends/BestFriends";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  let bestFriends = props.state.friendsData.map((f) => (
    <BestFriends id={f.id} name={f.name} src={f.src} />
  ));

  return (
    <nav className={s.navbar}>
      <NavLink
        to="/profile"
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        Profile
      </NavLink>
      <NavLink
        to="dialogs"
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        Messages
      </NavLink>
      <NavLink
        to="/news"
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        News
      </NavLink>
      <NavLink
        to="/music"
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        Music
      </NavLink>
      <div className={s.item}>&nbsp;</div>
      <NavLink
        to="/settings"
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        Settings
      </NavLink>

      <div className={s.item}>&nbsp;</div>

      <NavLink
        to="/friends"
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        Friends
      </NavLink>

      <div className={s.bestFriends}>{bestFriends}</div>
    </nav>
  );
};

export default Navbar;
