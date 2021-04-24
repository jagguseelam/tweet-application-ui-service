import React from "react";
import './InputField.css';

const InputField = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.name}>{props.title}</label>
            <input
                type={props.type}
                name={props.name}
                className={props.style}
                placeholder={props.placeholder}
                onChange={props.onChangeHandler} />
        </div>
    );
}

export default InputField;