import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {

  let dialogsItem = props.dialogsData.map((d,index) => (
    <div className={s.dialog} key={index}>
      <NavLink
        to={"/dialogs/" + d.id}
        className={(link) => (link.isActive ? s.active : s.item)}
      >
        <img className={s.avatar} src={d.src} alt="ava" />
        {d.name}
      </NavLink>
    </div>
  ));

  return <div>{dialogsItem}</div>;
};

export default DialogsItem;
