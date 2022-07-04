import React from 'react';
import './estilo.css';

export default function Button({type, children}) {
    return (
        <button type={type}>{children}</button>
    );
}

export function BtnNaoLancado({children}) {
    return (
        <button className='btn-nao-lancado'>{children}</button>
    );
}