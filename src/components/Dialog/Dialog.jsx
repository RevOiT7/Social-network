import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMassageBodyCreator} from "../../redux/dialog-reducer";


const Dialog = (props) => {

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMassageBodyCreator(body))
    }

    let dialogsElements = props.dialogData.map((dialog) => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messageElemrnts = props.massageData.map(message => <Message message={message.message}/>)
    let newMessageBody  = props.newMassageBody;

    return (
        <div className={s.dialogs}>
            <div children={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>{messageElemrnts}</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Edd message</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialog;
