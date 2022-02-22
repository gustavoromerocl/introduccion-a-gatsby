import React from 'react'
import * as helloComponentCSS from './hello.module.css'
//import styled from 'styled-components'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const title = {
  'color': 'orange',
  'font-size': '4em',
  'font-weight': 'bold'
}


const Hello = (props) => {
  /*console.log(helloComponentCSS);*/
  const Alert = styled.p`
    background-color: rgba(250,50,50,0.3);
    color: rgb(57, 0, 0);
    border-radius: 4px;
    padding: 8px 15px;
  `
  return (
    //Es necesario recibir los estilos que envian al momento de exportar el componente a trav+es de las props
    <div css={title} className={props.className}>
      <Alert>Alerta Styled components</Alert>
      <p className={ helloComponentCSS.alert } >Alerta CSS modules</p>
      <h1>hello {props.name}</h1>
    </div>
  )
}

//Styled components también es aplicable a componentes de react y en este ejemplo lo aplicamos al componente hello
//Adicional a la gestión de los estilos, con props.color validamos si el componente recibe algún color en la propiedad "color", de lo contrario por defecto será azul
export default styled(Hello)`
  color: ${ props => props.color || 'blue' };
`
