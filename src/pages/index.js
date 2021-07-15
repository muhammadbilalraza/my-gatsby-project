import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Styles from "../styles/normalize.css"

export default function Home() {
  return (
    <contatiner>
      <Header />
          <section>
            <p>this is the homepage</p>
          </section>
      <Footer />  
    </contatiner>
   
  )
}