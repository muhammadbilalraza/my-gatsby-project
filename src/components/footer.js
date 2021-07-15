import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FieldsOnCorrectTypeRule } from 'graphql'

const Footer = () => {
    return (
        <footer class = "footer"> 
            <container class = "footer_1">
                <div class = "sitemap" >
                    <div class = "support">
                        <h3>SUPPORT</h3>
                        <list>
                            <ul><Link to="">Virtual Shopping</Link></ul>
                            <ul><Link to="">How to Care for Your Jewelry</Link></ul>
                            <ul><Link to="">Shipping</Link></ul>
                            <ul><Link to="">Ring Sizer</Link></ul>
                            <ul><Link to="">Accessibility Statement</Link></ul>
                            <ul><Link to="">Contact Us</Link></ul>        
                        </list>
                    </div>

                    <div class = "companay">
                        <h3>COMPANAY</h3>
                        <list>
                            <ul><Link to="">About Us</Link></ul>
                            <ul><Link to="">Careers</Link></ul>
                            <ul><Link to="">Stores</Link></ul>
                        </list>
                    </div>
                </div>   
               
                <div class = "subscription_form">
                    <p>JOIN THE FINE CREW</p>
                    <p>Insider infor on new arrivals, early access, and everything fine.</p>
                    <form method = "post" action = "#">
                    <input type = "email" name="email" id="email" placeholder = "Your email" />
                    </form>
                </div>
            </container>

            <container class="footer_2">
                <div>
                    <p>flag</p>
                    <a>Handle</a>
                    <a>Handle</a>
                    <a>Handle</a>
                </div>

                <div>
                    <Link to="">Terms and Conditions</Link>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">(c)2021 Mejuri Inc.</Link>
                </div>
                <a>Help</a>
            </container>

        </footer>
    )
}

export default Footer