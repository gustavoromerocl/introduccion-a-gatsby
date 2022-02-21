import React from 'react'
//Se debe importar el archivo de estilos en cada lugar que se va a ocupar
import '../styles/layout.css'

export default (props) => {
  return (
    <div>
      <nav>Este es el nav</nav>

      <div className='container'>
        {props.children}
      </div>

      <footer>Este es el footer</footer>
    </div>
  )
}
