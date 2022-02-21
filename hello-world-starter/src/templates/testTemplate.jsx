import React from 'react'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

export default (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.pageContext.relativePath}</h1>
      <Img fluid={props.data.file.childImageSharp.fluid} alt="galeria dinámica" />
    </div>
  )
}

export const query = graphql`
query($relativePath : String){
  file(relativePath: {eq: $relativePath}) {
    childImageSharp {
      fluid(maxWidth: 1920, maxHeight: 1080){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`