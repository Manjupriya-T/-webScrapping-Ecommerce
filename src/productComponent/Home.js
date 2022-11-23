import React from 'react'
import {Link} from "react-router-dom"
import '../App.css'

function Home() {
  return (
    <div>
        <Link to="Product" >
        <img className = "Electroics"
        src ="https://researchsnipers.com/wp-content/uploads/2021/02/electronics.jpeg"
        alt ="Electronics"></img>
      <h1>Electronic Products</h1>
      </Link>
    </div>
  )
}

export default Home
