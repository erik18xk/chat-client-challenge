import "../styles/common/button.scss";
import React from 'react';

const WrapperButton = (props) => {
    return (
        <button
            className="button button--full-width button--green"
            onClick={() => props.parentCallback()}>
            {props.name}
        </button>
    )
}

export default WrapperButton;