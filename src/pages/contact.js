import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Navbar />
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)