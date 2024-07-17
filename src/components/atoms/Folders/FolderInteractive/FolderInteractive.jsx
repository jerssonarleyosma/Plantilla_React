import React from 'react'
import './styles/FolderInteractive.scss'

//falta agregar animacion para que se muestre la hoja con los datos dentro y que los que reciba sea cualquier cosa o cosas y esto hacerlo en un organismo

const FolderInteractive = ({ width, height}) => {
  return (
    <>
        <div 
            className='FolderInteractive-container'
            style={{
                width: width,
                height: height
            }}
        >
            <div className='FolderInteractive-container__folder'>
                <div></div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam placeat doloribus odio commodi reprehenderit, maxime officiis qui delectus soluta velit aperiam? Fugit obcaecati ipsum, architecto eveniet ab necessitatibus ducimus similique.
                </div>
                <div></div>
            </div>
        </div>
         
    </>
    
  )
}

export {FolderInteractive}