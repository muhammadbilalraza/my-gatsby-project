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
                            <ul><a href="">Virtual Shopping</a></ul>
                            <ul><a href="">How to Care for Your Jewelry</a></ul>
                            <ul><a href="">Shipping</a></ul>
                            <ul><a href="">Ring Sizer</a></ul>
                            <ul><a href="">Accessibility Statement</a></ul>
                            <ul><a href="">Contact Us</a></ul>        
                        </list>
                    </div>

                    <div class = "companay">
                        <h3>COMPANAY</h3>
                        <list>
                            <ul><a href="">About Us</a></ul>
                            <ul><a href="">Careers</a></ul>
                            <ul><a href="">Stores</a></ul>
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
                    <a>Terms and Conditions</a>
                    <a>Privacy Policy</a>
                    <a>(c)2021 Mejuri Inc.</a>
                </div>
                <a>Help</a>
            </container>

        </footer>
    )
}

export default Footer