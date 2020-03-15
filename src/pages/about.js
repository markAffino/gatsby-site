import React from "react"
import Navbar from "../components/navbar"
import Header from "../components/header"

export default () => (
  <div style={{ color: `tomato` }}>
    <Navbar />
    <Header headerText="My About Page"/>
    <p>What we do here and why?</p>
  </div>
)