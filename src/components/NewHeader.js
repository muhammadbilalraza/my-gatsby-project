import React, { Component } from "react"
import { Link } from "gatsby"
import companyLogo from "../images/MejuriLogo.png"
import { FieldsOnCorrectTypeRule } from "graphql"

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
              <Link to="#about">About</Link>
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
        <Link to="#">
          <img src={companyLogo} alt="Mejuri logo" />
        </Link>
      </div>
    </header>
  )
}

export default NewHeader
