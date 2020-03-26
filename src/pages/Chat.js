import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from "../components/Button";
import moment from "moment";
import '../styles/pages/chat.scss';
import List from "../components/List";

// TODO create separate Header

const Chat = () => {
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages);
    const { id } = useParams();

    const [message, setMessage] = useState("");

    const checkEnter = (e) => { // When user press enter send the message and clean the state.
        if (e.key === 'Enter') {
            dispatch({ type: 'CHAT.SEND_MESSAGE', payload: {message, id}});
            setMessage('');
        }
    }

    const sendMessage = () => {
        dispatch({ type: 'CHAT.SEND_MESSAGE', payload: {message, id}});
        setMessage('');
    }
    let renderMessage;

    if (messages && messages.length) {
        renderMessage = messages.map(el => {
            const isSend = el.contactId === id // If is true the message will appear on the right
            return (
                <div className="chat__messages__item">
                    <div className={`chat__messages__cloud${isSend ? '--send' : '--received'}`}>
                        <div className="chat__messages__message" key={el.id}> {el.message} </div>
                        <div className="chat__messages__message__date"> {moment(el.sentDate).format('hh:mm A')} </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="chat__container">
            <div className="chat__header">
                <h4> {id} </h4>
            </div>
            <div className="chat__messages">
                { renderMessage }
            </div>
            <div className="chat__send">
              <input type="text"
                     placeholder="Inserisci il testo"
                     value={message}
                     onChange={e => setMessage(e.target.value)}
                     onKeyDown={(e) => checkEnter(e)}
              />
                <Button name="Submit" parentCallback={sendMessage} class="button button--with-input button--green"></Button>
            </div>
        </div>
    )
}

export default Chat;