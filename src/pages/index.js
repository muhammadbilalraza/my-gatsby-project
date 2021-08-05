import React from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Cards from "../components/Cards"
import StyleEdit from "../components/StyleEdit"

export default function Home() {
  return (
    <container>
      <Header />
      <Hero />
      <Cards />
      <StyleEdit />
      <Footer />
    </container>
  )
}
