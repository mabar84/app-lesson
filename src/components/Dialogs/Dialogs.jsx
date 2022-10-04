import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  let messages = props.dialogsPage.messagesData.map((m) => (
    <Messages message={m.message} id={m.id} />
  ));

  // let newMessage = React.createRef();

  let addMessage = () => {
    // let text = newMessage.current.value;
    let text = props.dialogsPage.newMessageText;

    if (text === "") {
      console.log("Дык пусто");
    } else {
      // props.addMessage();
      props.dispatch(addMessageActionCreator());
    }
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    // props.updateNewMessageText(text);
    let action = updateNewMessageTextActionCreator(text);

    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        <DialogsItem dialogsData={props.dialogsPage.dialogsData} />
      </div>

      <div className={s.messages}>
        {messages}
        <div>
          <div className="">
            <textarea
              value={props.dialogsPage.newMessageText}
              // ref={newMessage}
              cols="30"
              rows="10"
              className="textarea"
              onChange={onMessageChange}
            ></textarea>
          </div>
          <div>
            <button className="button" onClick={addMessage}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
