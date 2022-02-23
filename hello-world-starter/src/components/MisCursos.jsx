import React from 'react'

const isAuth = false;

export default (props) => {

  if(!isAuth){
    props.navigate('/app')
    return null
  }
  return (
    <div>
      <h1>MisCursos</h1>
    </div>
  )
}
