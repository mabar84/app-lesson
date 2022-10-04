import s from "./BestFriends.module.css";

const BestFriends = (props) => {
  return (
    <div className={s.bestFriends}>
      <div className={s.item}>
        <p>{props.name}</p>
        <img className={s.avatar} src={props.src} alt={props.id} />
      </div>
    </div>
  );
};

export default BestFriends;
