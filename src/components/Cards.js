import { Link } from "gatsby"
import React from "react"
import Image1 from "../images/section2_card1.jpeg"
import Image2 from "../images/section2_card2.jpeg"
import Image3 from "../images/section2_card3.jpeg"

export default function Cards() {
  return (
    <div className="category-section">
      <h2 className="heading">Category</h2>

      <div className="card">
        <div className="card--content">
          <Link to="#category" className="link--image">
            <img src={Image1} alt="" />
          </Link>
          <p>Earrings</p>
        </div>
        <div className="card--content">
          <Link to="#category" className="link--image">
            <img src={Image2} alt="" />
          </Link>
          <p>Necklaces</p>
        </div>
        <div className="card--content">
          <Link to="#category" className="link--image">
            <img src={Image3} alt="" />
          </Link>
          <p>Rings</p>
        </div>
      </div>
    </div>
  )
}
