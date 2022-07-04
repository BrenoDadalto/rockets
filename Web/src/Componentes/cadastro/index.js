import React from 'react';
import './estilo.css';

function Cadastro({link, children}) {
    return (
        <a href={link}>{children}</a>
    );
}

export default Cadastro;