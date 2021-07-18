import React, { Component } from 'react'
import { Link } from 'gatsby'
import companyLogo from '../images/MejuriLogo.png'
import { FieldsOnCorrectTypeRule } from 'graphql'


const Header = () => {
    return (
        <header  className = "navbar-container"> 
            <div className="navbar navbar_links">
                <Link to="#">Shop</Link>
                <Link to="#">Gift Guides</Link>
                <Link to="#">Style Edits</Link>
                <Link to="#">About</Link>
            </div>
           
            <div className="navbar navbar_links">
                <Link to="#">Search</Link>
                <Link to="#">Stores</Link>
                <Link to="#">Sign in</Link>
            </div>

            <img className="navbar navbar_logo" src={companyLogo} alt="Mejuri logo" href="#" />    
        </header>
    )
}

export default Header