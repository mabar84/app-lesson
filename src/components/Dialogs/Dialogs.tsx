import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Messages from './Messages/Messages';
import {Navigate} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {FormField} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utilites/validators/validators';
import {MessageType} from "../../redux/dialogs-reducer";

const Dialogs: React.FunctionComponent<any> = (props) => {

    let state = props.dialogsPage

    let messages = state.messagesData.map((m: MessageType, index: number) => (
        <Messages message={m.message} id={m.id} key={index}/>
    ));

    const onSubmit = (values: any) => {
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
                <DialogsReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

const maxLength = maxLengthCreator(8)

let DialogsForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field elem={'textarea'} component={FormField} placeholder={'your message'} cols="30" rows="10"
                   name={'newMessage'} validate={[required, maxLength]}
            />
            <div>
                <button className="button">
                    Отправить
                </button>
            </div>
        </form>)
}

let DialogsReduxForm = reduxForm({form: 'newMessageForm'})(DialogsForm)

export default Dialogs;
