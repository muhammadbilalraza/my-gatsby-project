import React, { Component } from 'react'
import { Link } from 'gatsby'
import companyLogo from '../images/MejuriLogo.png'
import { FieldsOnCorrectTypeRule } from 'graphql'

import '../styles/header.css'

const Header = () => {
    return (
        <header class = "header">
            <nav class="navbar">
                <div class="navbar_links_left">
                    <Link to="">SHOP</Link>
                    <Link to="">GIFT GUIDES</Link>
                    <Link to="">STYLE EDITS</Link>
                </div>
                <div class="navbar_links_right">
                    <Link to="">STORES</Link>
                    <Link to="">SIGN IN</Link>
                </div>

                <div class="navbar-brand">
                    <img src={companyLogo} alt="Mejuri logo" href="" />
                 </div>
            </nav>



        </header>
    )
}

export default Header