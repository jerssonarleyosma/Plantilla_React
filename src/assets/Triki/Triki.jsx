import React, { Fragment } from 'react'
import './Style/Triki.scss'


const TURNS = {
  X: 'x',
  O: 'o',
}

const board = Array(9).fill(null)

const Triki = () => {
  return (
    <Fragment>
      <main className='triki-container'>
        <h1 className='triki-container__tittle'>Juego triki</h1>
        <section className='triki-container__board'>
          {
            board.map((element, index) => {
              return (
                <div key={index}>
                  <span>
                    {index}
                  </span>
                </div>
              )
            })
          }
        </section>
      </main>
    </Fragment>
  )
}

export {Triki}
