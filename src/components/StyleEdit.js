import { Link } from "gatsby"
import React from "react"

import Image1 from "../images/section3_card1.jpeg"
import Image2 from "../images/section3_card2.jpeg"
// import Image3 from "../images/section3_card2.jpeg"

export default function StyleEdit() {
  return (
    <div className="style-edit-container">
      <h2>Style Edit</h2>
      <div className="blog-cards">
        <div className="--blogs">
          <Link>
            <img id="firstImage" src={Image1} alt="" />
            <p></p>
            Read more
          </Link>
        </div>
        <div className="--blogs">
          <Link>
            <img src={Image2} alt="" />
            <p></p>
            Read more
          </Link>
        </div>
        <div className="--blogs">
          <Link>
            <img src={Image1} alt="" />
            <p></p>
            Read more
          </Link>
        </div>

        <div className="edit-button">
          <Link></Link>
        </div>
      </div>
    </div>
  )
}
