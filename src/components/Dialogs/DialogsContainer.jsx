import React from "react";
import {
    sendMessageCreator, updateNewMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {

                let onSendMessageClick = () => {

                    // if (text === "") {
                    //     console.log("Пусто");
                    // } else {
                    store.dispatch(sendMessageCreator());
                    // }
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageCreator(body));
                };

                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;
