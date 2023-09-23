import React from "react";
import logo from '../assets/images/logo.png'
import '../styles/header.css'

export default function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="sad"/>
            <h1>Let`s manage your monthly budget!</h1>
        </header>
    )
}
