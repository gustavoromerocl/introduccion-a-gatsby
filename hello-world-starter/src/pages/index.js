import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

export default function Home(props) {
  console.log(props);
  return (
  <div>
    <h1>Home</h1>
    <Link to="/about">Acerca de e</Link>
    <Img fixed={props.data.file.childImageSharp.fixed} />
  </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "publicista.jpg"}) {
      childImageSharp {
        fixed(width: 250, height: 250){
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
