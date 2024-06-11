import React from 'react'

const Pruebas = () => {
  return (
    <div>
      <input list="browsers" />
      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
      </datalist>
    </div>
  )
}

export { Pruebas }