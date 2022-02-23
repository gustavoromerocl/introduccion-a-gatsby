import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const container = {
  display: 'flex'
}

const element = {
  flex: '1',
  textAlign: 'center',
  
  color: 'white',
  padding: '10px 15px'
}

const NavLink = styled(Link)`
  background-color: ${props => props.active ? 'red' : 'rgb(50, 50, 200)'}
`

export default (props) => {
  const [path, setPath] = useState('index');
  return (
    <nav css={container} >
      <NavLink css={element} to="/" onClick={ev => setPath('index')} active={ path == 'index' }>Inicio</NavLink>
      <NavLink css={element} to="/about" onClick={ev => setPath('about')} active={path == 'about'} >Acerca de</NavLink>
    </nav>
  )
}

