import React from 'react'
import sair from '../Assets/img/sair.png';
import '../Assets/css/Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="container header">
                <h1 className="header_titulo">Pet Care</h1>
                <a className="header_texto">Home</a>
                <a className="header_texto">Veterinários</a>
                <a className="header_texto">Horários</a>
                <a className="header_texto">Contato</a>
                <img src={sair} alt="ícone de sair" />
            </div>
        </header>
    )
}