import React from "react"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Hero from "../components/Hero"

export default function Home() {
  return (
    <contatiner>
      <Header></Header>
          <section>
            <Hero></Hero>
          </section>
      <Footer></Footer>  
    </contatiner>
   
  )
}