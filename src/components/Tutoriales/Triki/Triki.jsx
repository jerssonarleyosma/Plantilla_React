import React from 'react'
import './styles/Triki.scss'
import { TextWriting } from '../../atoms/Texts/TextWriting/TextWriting'


const Triki = () => {
  return (
    <div className='triki'>
        <h2 className='triki__tittle'>
            <TextWriting text={'Juego de triki'} size={'3.6rem'} duration={3} blur={[9,10,11,12,13]} restart={20000} boldtext={[9,10,11,12,13]}/>
        </h2>
        <div className='triki__game'>

        </div>
    </div>
  )
}

export { Triki }