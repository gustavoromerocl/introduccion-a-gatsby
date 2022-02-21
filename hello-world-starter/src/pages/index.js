import React from "react"
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/Layout";

export default function Home(props) {
  console.log(props);
  return (
  <Layout>
    <h1>Home</h1>
    <Link to="/about">Acerca de e</Link>
    {/*<Img fixed={props.data.file.childImageSharp.fixed} />*/}
    <Img fluid={props.data.file.childImageSharp.fluid} alt="programador" />
  </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: {eq: "programador.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1080){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
