import React from 'react'
import { Contador } from './assets/Contador/Contador.jsx'
import { Triki } from './assets/Triki/Triki.jsx'
import { SchemeButton } from './assets/Components/Bottons/SchemeButton/SchemeButton.jsx'



const App = () => {

  return (
    <React.Fragment>
      <SchemeButton />
      <Contador />
    </React.Fragment>
  )
}

export { App }
