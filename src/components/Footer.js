import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">
        <div className="sitemap">
          <div className="support">
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
          <div className="company">
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

        <div className="subscription-form">
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

      <div className="footer-2">
        <div>
          <div>flag div</div>
          <div>
            <a>Handle</a>
            <a>Handle</a>
            <a>Handle</a>
          </div>
        </div>

        <div>
          <Link to="">Terms and Conditions</Link>
          <Link to="">Privacy Policy</Link>
          <Link to="">(c)2021 Mejuri Inc.</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
