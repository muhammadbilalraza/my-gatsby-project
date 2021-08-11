import React from "react"
import { Link } from "gatsby"
import companyLogo from "../images/MejuriLogo.png"

const NewHeader = () => {
  return (
    <header>
      <input type="checkbox" id="nav-toggle" class="nav-toggle"></input>
      <nav>
        <div className="navbar navbar_links nav_left">
          <ul>
            <li>
              <Link to="#shop">Shop</Link>
            </li>
            <li>
              <Link to="#gift-guides">Gift Guides</Link>
            </li>
            <li>
              <Link to="#style-edits">Style Edits</Link>
            </li>
            <li>
              <Link to="/about" className="about">
                About
              </Link>
              <ul className="about-list">
                <li>
                  <Link>Our Commitment</Link>
                </li>
                <li>
                  <Link>Overview</Link>
                </li>
                <li>
                  <Link>Behind Our Fine Jewelry</Link>
                </li>
                <li>
                  <Link>Fair Pricing</Link>
                </li>
                <li>
                  <Link>Our Materials</Link>
                </li>
                <li>
                  <Link>How to Care for Your Jewelry</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar navbar_links nav_right">
          <ul>
            <li>
              <Link to="#search">Search</Link>
            </li>
            <li>
              <Link to="#stores">Stores</Link>
            </li>
            <li>
              <Link to="#sign-in">Sign in</Link>
            </li>
          </ul>
        </div>
      </nav>

      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>

      <div className="navbar nav_logo">
        <Link to="/">
          <img src={companyLogo} alt="Mejuri logo" />
        </Link>
      </div>
    </header>
  )
}

export default NewHeader
