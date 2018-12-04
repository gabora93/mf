import React from 'react';
import './Button.css';

const Button = (props) => (
    <button
        disabled={props.disabled}
        onClick={props.clicked}
        className={`Button ${props.btnType} ${props.other}`}

    >{props.children}</button>
);

export default Button;