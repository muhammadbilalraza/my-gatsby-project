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
        {/* <div className="--blogs"> */}
        <Link>
          <img id="firstImage" src={Image1} alt="" />
          <p className="description-paragraph">
            3 ways to wear men's jewelry - by a guy who knows
          </p>
          <p className="read-more">Read more</p>
        </Link>
        {/* </div> */}
        {/* <div className="--blogs"> */}
        <Link>
          <img src={Image2} alt="" />
          <p className="description-paragraph">
            Matilda Djerf's low maintenance summer routine
          </p>
          <p className="read-more">Read more</p>
        </Link>
        {/* </div> */}
        {/* <div className="--blogs"> */}
        <Link>
          <img src={Image1} alt="" />
          <p className="description-paragraph">
            How to get that signature mejuri stack
          </p>
          <p className="read-more">Read more</p>
        </Link>
        {/* </div> */}
      </div>

      <div className="edit-button">
        <Link>See all edits</Link>
      </div>
    </div>
  )
}
