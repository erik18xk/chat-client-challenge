import "../styles/common/button.scss";
import React from 'react';
import { NavLink } from "react-router-dom";

const WrapperButton = (props) => (
    props.link ?
        <NavLink to={props.link} className={`${props.class}`} activeClassName={props.activeClassName}>
            {props.name}
        </NavLink> :
        <button
            className={`${props.class}`}
            onClick={() => props.parentCallback()}>
            {props.name}
        </button>
)

export default WrapperButton;