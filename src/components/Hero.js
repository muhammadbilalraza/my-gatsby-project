import React from 'react'
import { Link } from 'gatsby'

import HeroPhoto1 from "../images/hero_photo1.jpeg"
import HeroPhoto2 from "../images/hero_photo2.jpeg"



export default function Hero() {
    return (
        <section>
            <div className="hero">
                <img src={HeroPhoto1}></img>
                <img src={HeroPhoto2}></img>
                <p>Fine jewelry<br/>for every day</p>
                <Link to='#shop' className='button'>
                    <div>Shop all</div>
                </Link>
            </div>
        </section>
    )
}
