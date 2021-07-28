import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer class="footer">
      <container class="footer_1">
        <div class="sitemap">
          <div class="support">
            <h3>SUPPORT</h3>
            <list>
              <ul>
                <Link to="#footer">Virtual Shopping</Link>
              </ul>
              <ul>
                <Link to="#footer">How to Care for Your Jewelry</Link>
              </ul>
              <ul>
                <Link to="#footer">Shipping</Link>
              </ul>
              <ul>
                <Link to="#footer">Ring Sizer</Link>
              </ul>
              <ul>
                <Link to="#footer">Accessibility Statement</Link>
              </ul>
              <ul>
                <Link to="#footer">Contact Us</Link>
              </ul>
            </list>
          </div>

          <div class="companay">
            <h3>COMPANAY</h3>
            <list>
              <ul>
                <Link to="#footer">About Us</Link>
              </ul>
              <ul>
                <Link to="#footer">Careers</Link>
              </ul>
              <ul>
                <Link to="#footer">Stores</Link>
              </ul>
            </list>
          </div>
        </div>

        <div class="subscription_form">
          <p>JOIN THE FINE CREW</p>
          <p>
            Insider info on new arrivals, early access, and everything fine.
          </p>
          <form method="post" action="#">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
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
          <Link to="#footer">Terms and Conditions</Link>
          <Link to="#footer">Privacy Policy</Link>
          <Link to="#footer">(c)2021 Mejuri Inc.</Link>
        </div>
        <a>Help</a>
      </container>
    </footer>
  )
}

export default Footer
