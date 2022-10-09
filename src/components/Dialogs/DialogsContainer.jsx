import React from "react";
import {
  sendMessageCreator, updateNewMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  //let state=props.store.getState().dialogsPage
  let state=props.store.dialogsPage

  let onSendMessageClick = () => {
    let text = state.newMessageText;

    if (text === "") {
      console.log("Пусто");
    } else {
      props.store.dispatch(sendMessageCreator());
    }
  };

  let onNewMessageChange = (body) => {
    console.log("Изменения?!")
    props.store.dispatch(updateNewMessageCreator(body));
  };

  return <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state} />
};

export default DialogsContainer;
