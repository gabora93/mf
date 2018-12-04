import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement = null;

    let validationError = null;

    let inputClasses = '';

    if(props.invalid && props.shouldValidate && props.touched ){
        inputClasses = 'Invalid'
    }

    if(props.invalid && props.touched){
        validationError = <p>{props.valueType}</p>
    }
    

    inputElement = <input className={`form-control inputs InputElement ${inputClasses}`} {...props.elementConfig} value={props.value} onChange={props.changed}/>

    return(
        <div>
            <label className='Label'>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )

}

export default Input;