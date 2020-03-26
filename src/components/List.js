import React from 'react';
import { Link } from "react-router-dom";
import '../styles/components/list.scss';

const List = ({ props }) => {

    const getFullName = (name, surname) => {
        return `${name} ${surname}`
    }

    return (
        <Link to={`chat/${props.id}`} className="contact__container">
            <div className="contact__user-image">
                <img src={props.avatar} />
            </div>
            <div className="contact__user-name">
                <h3> { getFullName(props.name, props.surname) } </h3>
            </div>
            <div className="contact__description">
                <div className="contact__date">
                    10.55
                </div>
                <div className="contact__description__unread">
                    { props.unreadCount}
                </div>
            </div>
        </Link>
    )
};

export default List;