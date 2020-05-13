import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

import logo from '../assets/logos-js.png'
import camera from '../assets/camera.svg'

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaClone"/>
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar Publicações"/>
                </Link>
            </div>
        </header>
    )
}