import React from "react";
import {  sendMessageCreator} from "../../redux/dialogs-reducer";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

  let state = props.dialogsPage

  console.log(state)

  let messages = state.messagesData.map((m,index) => (
    <Messages message={m.message} id={m.id} key={index} />
  ));

  // let newMessage = React.createRef();

  let onSendMessageClick = () => {
    // let text = newMessage.current.value;
    // let text = props.addMessage()

    props.sendMessage()

    // if (text === "") {
    //   console.log("Пусто");
    // } else {
    //   // props.addMessage();
    //   props.dispatch(sendMessageCreator());
    // }
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    console.log(body)
    props.updateNewMessageBody(body)

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
