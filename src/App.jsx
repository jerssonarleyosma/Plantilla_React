import React from 'react'
import { SchemeButton } from './components/molecules/SchemeButton/SchemeButton.jsx'
import { JuegoTriki } from '@templates/JuegoTriki/JuegoTriki.jsx'




const App = () => {

  return (
    <React.Fragment>
      <SchemeButton />
      <JuegoTriki/>
    </React.Fragment>
  )
}

export { App }
