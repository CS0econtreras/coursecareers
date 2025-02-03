"use client";
import { useState } from "react";

function Squares ({value, onClick}) {
  return <button className="square" onClick = {onClick}>
    {value}
  </button>
}

function Board(){
  const[squares, setSquares] = useState(Array(9).fill(null));
  const[xIsNext, setXIsNext] = useState(true);

  function onSquareClick(idx){
    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(newSquares);
  }

  return(
    <>
      <div className="square-rows">
        <Squares value={squares[0]} onClick={() => onSquareClick(0)} />
        <Squares value={squares[1]} onClick={() => onSquareClick(1)} />
        <Squares value={squares[2]} onClick={() => onSquareClick(2)} />
      </div>
      <div className="square-rows">
        <Squares value={squares[3]} onClick={() => onSquareClick(3)} />
        <Squares value={squares[4]} onClick={() => onSquareClick(4)} />
        <Squares value={squares[5]} onClick={() => onSquareClick(5)} />
      </div>
      <div className="square-rows">
        <Squares value={squares[6]} onClick={() => onSquareClick(6)} />
        <Squares value={squares[7]} onClick={() => onSquareClick(7)} />
        <Squares value={squares[8]} onClick={() => onSquareClick(8)} />
      </div>
    </>
  )
}

export default function Game(){
  return(
    <div>
      <Board/>
    </div>
  )
}
