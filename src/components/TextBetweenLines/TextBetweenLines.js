import React from 'react';
import './TextBetweenLines.css';

const TextBetweenLines = (props) => (
    <div className='strike'>
        <span >
            {props.text}
        </span>
    </div>
)


export default TextBetweenLines;