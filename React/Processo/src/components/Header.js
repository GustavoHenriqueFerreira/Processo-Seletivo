import React from 'react'
import sair from '../assets/img/sair.png';
import '../assets/css/Header.css'

export default function Header() {
    return (
        <header class="topo">
        <div class="container flex">
            <div class="flex">
                <h1><a href="#">Pet Care</a></h1>
            </div>
            <nav class="menu">
                <ul class="flex">
                    <li><a href="#secao1">Home</a></li>
                    <li><a href="#secao1">Veterinários</a></li>
                    <li><a href="#secao1">Horários</a></li>
                    <li><a href="#secao2">Contato</a></li>
                </ul>
            </nav>
            <img src={sair} alt="ícone de sair" />
        </div>
    </header>
    )
}