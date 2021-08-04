import { Link } from "gatsby"
import React from "react"
import Image1 from "../images/section2_card1.jpeg"
import Image2 from "../images/section2_card2.jpeg"
import Image3 from "../images/section2_card3.jpeg"

export default function Cards() {
  return (
    <div className="category-section">
      <div className="category--heading">
        <h2 className="heading">Category</h2>
        <Link to="#shop">Shop all</Link>
      </div>

      <div className="card">
        {/* <div className="card--content"> */}
        <Link to="#category" className="link--image">
          <img src={Image1} alt="" />
          <p>Earrings</p>
        </Link>
        {/* </div> */}
        {/* <div className="card--content"> */}
        <Link to="#category" className="link--image">
          <img src={Image2} alt="" />
          <p>Necklaces</p>
        </Link>
        {/* </div> */}
        {/* <div className="card--content"> */}
        <Link to="#category" className="link--image">
          <img src={Image3} alt="" />
          <p>Rings</p>
        </Link>
        {/* </div> */}
      </div>
    </div>
  )
}
