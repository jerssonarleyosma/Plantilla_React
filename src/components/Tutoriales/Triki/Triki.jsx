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

      if( boardToCheck[a] && boardToCheck[a] == boardToCheck[b] && boardToCheck[a] == boardToCheck[c] ) {
        return boardToCheck[a]
      }
    }
    return null
  } 

  const updateBoard = (index) => {
    
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


  return (
    <main className='triki'>
        <h2 className='triki__tittle'>
            <TextWriting text={'Juego de triki'} size={'3.6rem'} duration={3} blur={[9,10,11,12,13]} restart={20000} boldtext={[9,10,11,12,13]}/>
        </h2>
        <section className='triki__game'>
          {
            board.map((ele, ind) => {
              return (
                <Square 
                  key={ind}
                  index={ind}
                  updateBoard={updateBoard}
                >
                  {board[ind]}
                </Square>
              )
            })
          }
        </section>
        <section className='triki__turn'>
        <Square isSelected={turn == TURNS.X}>
            {TURNS.X}
          </Square>
        <Square isSelected={turn == TURNS.O}>
            {TURNS.O}
        </Square>
        </section>
    </main>
  )
}

export { Triki }