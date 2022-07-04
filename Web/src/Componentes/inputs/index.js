import React from 'react';
import './estilo.css';

function Input({type, placeholder, name}) {
    return (
        <input type={type} placeholder={placeholder} name={name} />
    );
}

export default Input;