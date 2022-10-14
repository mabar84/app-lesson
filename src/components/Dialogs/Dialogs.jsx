import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

  let state = props.dialogsPage

  let messages = state.messagesData.map((m,index) => (
    <Messages message={m.message} id={m.id} key={index} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage()
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.names}>
        <DialogsItem dialogsData={state.dialogsData} />
      </div>

      <div className={s.messages}>
        {messages}
        <div>
          <div className="">
            <textarea
              value={state.newMessageText}
              // ref={newMessage}
              cols="30"
              rows="10"
              className="textarea"
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button className="button" onClick={onSendMessageClick}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
