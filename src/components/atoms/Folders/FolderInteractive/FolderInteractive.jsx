import React from 'react'
import './styles/FolderInteractive.scss'

const FolderInteractive = ({children, width, height}) => {
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
            <div className='FolderInteractive-container__tittle'>
                {children}
            </div>
        </div>
         
    </>
    
  )
}

export {FolderInteractive}