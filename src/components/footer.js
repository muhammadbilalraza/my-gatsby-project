import React, { Component } from 'react'
import { Link } from 'gatsby'
import { FieldsOnCorrectTypeRule } from 'graphql'

const Footer = () => {
    return (
        <footer class = "footer"> 
            <container class = "footer_1">
                <div >
                    <div class = "support">
                        <h3>SUPPORT</h3>
                        <a href="">Virtual Shopping</a> <br/>
                        <a href="">How to Care for Your Jewelry</a> <br/>
                        <a href="">Shipping &amp; Reutrns</a> <br/>
                        <a href="">Ring Sizer</a> <br/>
                        <a href="">Accessibility Statement</a> <br/>
                        <a href="">Contact Us</a> <br/>
                    </div>
                    <div class = "companay">
                        <h3>COMPANAY</h3>
                        <a href="">About Us</a> <br/>
                        <a href="">Careers</a> <br/>
                        <a href="">Stores</a> <br/>
                    </div>
                </div>   
               
                <div>
                    <div>
                        <p>JOIN THE FINE CREW</p>
                        <p>Insider infor on new arrivals, early access, and everything fine.</p>
                        <form method = "post" action = "#">
                            <input type = "email" name="email" id="email" placeholder = "Your email" />
                        </form>
                    </div>
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