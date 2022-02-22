import React from 'react'
import * as helloComponentCSS from './hello.module.css'

export default (props) => {
  console.log(helloComponentCSS);
  return (
    <div>
      <p className={ helloComponentCSS.alert } >Alerta</p>
      <h1>hello {props.name}</h1>
    </div>
  )
}
