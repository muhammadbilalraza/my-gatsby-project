import React from 'react'
import HeroPhoto1 from "../images/hero_photo1.jpeg"
import HeroPhoto2 from "../images/hero_photo2.jpeg"



export default function Hero() {
    return (
        <div class="hero">
            <img src={HeroPhoto1}></img>
            <img src={HeroPhoto2}></img>
        </div>
    )
}
