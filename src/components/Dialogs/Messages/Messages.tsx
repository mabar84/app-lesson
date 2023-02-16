import s from "./../Dialogs.module.css";

const Messages: React.FC<MessagesPropsType> = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

type MessagesPropsType = {
    id: number
    message: string
}

export default Messages;
