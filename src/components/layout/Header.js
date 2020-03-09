import React from 'react';
import {Link} from 'react-router-dom';

export function Header(){
    return(
        <header style={headerStyle}>
            <h1>Tareas de Chris</h1>
            <Link style={linkStyle} to='/'>Inicio</Link> | 
            <Link style={linkStyle} to='/about'>Info</Link>
        </header>

    )
}

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding:'10px',
    marginBottom:'10px'
}

const linkStyle = {
    color:'#fff',
    textDecoration: 'none',
    marginLeft: '5px'
}
