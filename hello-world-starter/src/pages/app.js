import React from 'react'
import { Router } from '@reach/router'
import Home from '../components/Home'
import MisCursos from '../components/MisCursos'

export default (props) => {
  return (
    <div>
      <Router>
        <Home path="/app"/>
        <MisCursos path="/app/mis-cursos"/>
      </Router>
    </div>
  )
}

