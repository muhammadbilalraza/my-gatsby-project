import { Link } from "gatsby"
import React from "react"
import Image1 from "../images/section2_card1.jpeg"
import Image2 from "../images/section2_card2.jpeg"
import Image3 from "../images/section2_card3.jpeg"
import Image4 from "../images/section2_card4.webp"
import Image5 from "../images/section2_card5.webp"
import Image6 from "../images/section2_card6.webp"

export default function Cards() {
  return (
    <div className="category-section">
      <div className="category--heading">
        <h2 className="heading">Category</h2>
        <Link to="#shop">Shop all</Link>
      </div>

      <div className="card">
        <Link to="#category" className="link--image">
          <img src={Image1} alt="" />
          <p>Earrings</p>
        </Link>

        <Link to="#category" className="link--image">
          <img src={Image2} alt="" />
          <p>Necklaces</p>
        </Link>

        <Link to="#category" className="link--image">
          <img src={Image3} alt="" />
          <p>Rings</p>
        </Link>

        <Link to="#category" className="link--image">
          <img src={Image4} alt="" />
          <p>Bracelets</p>
        </Link>

        <Link to="#category" className="link--image">
          <img src={Image5} alt="" />
          <p>Best Sellers</p>
        </Link>

        <Link to="#category" className="link--image">
          <img src={Image6} alt="" />
          <p>Engagement</p>
        </Link>
      </div>
    </div>
  )
}
