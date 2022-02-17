import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
  <div>
    <h1>Home</h1>
    <Link to="/about">Acerca de e</Link>
    <img src={'images/programador.jpg'} />
  </div>
  )
}
