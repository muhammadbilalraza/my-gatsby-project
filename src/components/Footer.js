import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-1">
        <div class="sitemap">
          <div class="support">
            <h3>SUPPORT</h3>
            <ul>
              <li>
                <Link to="#">Virtual Shopping</Link>
              </li>
              <li>
                <Link to="#">How to Care for Your Jewelry</Link>
              </li>
              <li>
                <Link to="#">Shipping</Link>
              </li>
              <li>
                <Link to="#">Ring Sizer</Link>
              </li>
              <li>
                <Link to="#">Accessibility Statement</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div class="companay">
            <h3>COMPANAY</h3>
            <ul>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Stores</Link>
              </li>
            </ul>
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
      </div>

      <div class="footer-2">
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
      </div>
    </footer>
  )
}

export default Footer
