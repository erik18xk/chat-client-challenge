import React from 'react';
import '../styles/components/contact-list.scss';
import { useSelector } from 'react-redux'
import List from './List';

const ContactsList = () => {
    const contacts = useSelector(state => state.contacts);
    let list;
    if (contacts && contacts.length) {
        list = contacts.map(el => {
            return (
                <List props={el} key={el.id}/>
            )
        })
    }
    return (
        <div className="contact-list__container">
            { list }
        </div>
    )
}

export default ContactsList;