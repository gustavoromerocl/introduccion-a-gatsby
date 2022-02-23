import React from 'react'
//Se debe importar el archivo de estilos en cada lugar que se va a ocupar
import '../styles/layout.css'
import Navigation from './Navigation'

export default (props) => {
  return (
    <div>
      <Navigation />

      <div className='container'>
        {props.children}
      </div>

      <footer>Este es el footer</footer>
    </div>
  )
}
