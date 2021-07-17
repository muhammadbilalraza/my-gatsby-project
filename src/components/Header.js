import React, { Component } from 'react'
import { Link } from 'gatsby'
import companyLogo from '../images/MejuriLogo.png'
import { FieldsOnCorrectTypeRule } from 'graphql'


const Header = () => {
    return (
        <header class = "header"> 
            <div class="navbar_links_left">
                <Link to="">SHOP</Link>
                <Link to="">GIFT GUIDES</Link>
                <Link to="">STYLE EDITS</Link>
            </div>
            <img class="navbar_logo" src={companyLogo} alt="Mejuri logo" href="" />    
            <div class="navbar_links_right">
                <Link to="">STORES</Link>
                <Link to="">SIGN IN</Link>
            </div>
        </header>
    )
}

export default Header