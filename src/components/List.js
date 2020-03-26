import React from 'react';
import { Link } from "react-router-dom";
import '../styles/components/list.scss';
import { useDispatch } from 'react-redux';

const List = ({ props }) => {
    const dispatch = useDispatch()

    const getFullName = (name, surname) => {
        return `${name} ${surname}`
    }

    const fetchMessages = (id) => {
        dispatch({ type: 'CHAT.FETCH_MESSAGES_BY_ID', payload: {id}})
    }

    return (
        <Link to={`chat/${props.id}`} className="contact__container" onClick={() => fetchMessages( props.id )}>
            <div className="contact__user-image">
                <img src={props.avatar} alt={props.avatar}/>
            </div>
            <div className="contact__user-name">
                <h3> { getFullName(props.name, props.surname) } </h3>
            </div>
            <div className="contact__description">
                <div className="contact__date">
                    22:15
                </div>
                <div className="contact__description__unread">
                    { props.unreadCount}
                </div>
            </div>
        </Link>
    )
};

export default List;