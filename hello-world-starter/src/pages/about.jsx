import React from "react"
import Hello from "../components/hello/Hello"

export default () => {
  return (
    <div>
      {/**Pasamos el color para validar la funcionalidad de styled componentes en el componente hello */}
      <Hello name={"Tavo"} color="red"/>
    </div>
  )
}