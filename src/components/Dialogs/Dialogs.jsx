import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import {Navigate} from 'react-router-dom';
import handleSubmit from 'redux-form/lib/handleSubmit';
import {Field, reduxForm} from 'redux-form';

const Dialogs = (props) => {

    let state = props.dialogsPage

    let messages = state.messagesData.map((m, index) => (
        <Messages message={m.message} id={m.id} key={index}/>
    ));

    const onSubmit = (values) => {
        props.sendMessage(values.newMessage)
        values.newMessage = ''
    };

    if (!props.isAuth) return <Navigate to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.names}>
                <DialogsItem dialogsData={state.dialogsData}/>
            </div>

            <div className={s.messages}>
                {messages}
                <DialogsForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

let DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessage'} cols="30" rows="10" className="textarea"/>
            <div>
                <button className="button">
                    Отправить
                </button>
            </div>
        </form>)
}

DialogsForm = reduxForm({form: 'newMessageForm'})(DialogsForm)

export default Dialogs;
