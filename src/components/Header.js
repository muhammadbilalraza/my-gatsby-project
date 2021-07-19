import React, { Component } from 'react'
import { Link } from 'gatsby'
import companyLogo from '../images/MejuriLogo.png'
import { FieldsOnCorrectTypeRule } from 'graphql'


const Header = () => {
    return (
        <header  className = "navbar-container"> 
            <div className="navbar navbar_links">
                <Link to="#shop">Shop</Link>
                <Link to="#gift-guides">Gift Guides</Link>
                <Link to="#style-edits">Style Edits</Link>
                <Link to="#about">About</Link>
            </div>
           
            <div className="navbar navbar_links">
                <Link to="#search">Search</Link>
                <Link to="#stores">Stores</Link>
                <Link to="#sign-in">Sign in</Link>
            </div>

            <div className="navbar logo_link">
                <Link to='#'>
                    <img className="navbar_logo" src={companyLogo} alt="Mejuri logo"/>
                </Link>
            </div>   
        </header>
    )
}

export default Header