import React from "react";

const InputError = (props) => {
    return (
        <div className='input-errors'>{props.errorMessage}</div>
    );
}

export default InputError;