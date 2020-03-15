import React from "react"
import { Link } from "gatsby"

export default () => 
    <div style={{ color: `tomato` }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>