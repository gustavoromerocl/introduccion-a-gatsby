import React from 'react'

export default (props) => {
  console.log(props)
  return (
    <div>
      <h1>Soy un template. Hola {props.pageContext.name}</h1>
    </div>
  )
}