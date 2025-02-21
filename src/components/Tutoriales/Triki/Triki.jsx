import React, { useState } from 'react'
import './styles/Triki.scss'
import { TextWriting } from '../../atoms/Texts/TextWriting/TextWriting'

const TURNS = {
  X: 'x',
  O: 'o',
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `${isSelected ? 'triki__square triki__square--selected' : 'triki__square'}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [2,5,8],
  [1,4,7],
  [0,4,8],
  [2,4,6],
]

const Triki = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] =useState(null)
  
  
  const checkWinner = (boardToCheck) => {
    
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo

      const draw = boardToCheck.every((ele) => ele !== null);

      if(draw) {
        if( boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c] ) {
          return boardToCheck[a]
        }
        return 'Empate'
      }

      if( boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c] ) {
        return boardToCheck[a]
      }
      
    }
    return null
  } 

  const actualizarTablero = (index) => {
    
    if (board[index] || winner) return

    const newBoard = [...board]

    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    

    if(newWinner) {
      
      setWinner(newWinner)
    }

  }

  const cambiarTurno = (turno) => {
    setTurn(turno)
  }

  const reiniciar = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='triki'>
        <h2 className='triki__tittle'>
          <TextWriting text='Juego de Triki' size='3rem' boldtext={[9, 10, 11, 12, 13]} duration={2} restart={18000} />
        </h2>
        <section className='triki__game'>
          {
            board.map((ele, ind) => {
              return (
                <Square 
                  key={ind}
                  index={ind}
                  updateBoard={actualizarTablero}
                >
                  {board[ind]}
                </Square>
              )
            })
          }
        </section>
        <section className='triki__turn'>
        <Square isSelected={turn == TURNS.X} updateBoard={ cambiarTurno } index={TURNS.X}>
            {TURNS.X}
          </Square>
        <Square isSelected={ turn == TURNS.O } updateBoard={ cambiarTurno } index={TURNS.O}>
            {TURNS.O}
        </Square>
        </section>
        {
          winner && (
            <section className='triki__winner'>
              <h3 className='triki__winner-tittle'>
                {
                  winner === 'Empate' ? 'Empate 描く' : `Ganador: ${winner}`
                }
              </h3>
              <button className='triki__winner-reset' onClick={reiniciar}>Reiniciar</button>
            </section>
          )
        }
        
    </main>
  )
}

export { Triki }