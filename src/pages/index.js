import React from "react"
import Navbar from "../components/navbar"
import Header from '../components/header'

export default () => (
  <div style={{ color: `purple` }}>
    <Navbar />
    <Header headerText="My Home Page" />
    <p>What a great design</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)