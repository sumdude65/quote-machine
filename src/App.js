import React, { useState } from "react";
import "./style.css";

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [status, setStatus] = useState(null);
  const [history, setHistory] = useState([]);
  const [xNext, setXNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    let newBoard = {
      square: [...board],
    };
    if (status) {
      return;
    }
    if (board[i]) {
      return;
    }
    if (xNext) {
      newBoard.square[i] = "X";
      setBoard(newBoard.square);
      setXNext(!xNext);
    } else {
      newBoard.square[i] = "O";
      setBoard(newBoard.square);
      setXNext(!xNext);
    }
    if (calcWinner(newBoard.square)) {
      setStatus("Winner");
    }
    setStepNumber(stepNumber + 1);
    let newHistory = newBoard;
    setHistory([...history, newHistory]);
    console.log(history);
  };

  const calcWinner = (arr) => {
    const gameOver = arr.every((a) => {
      if (a) {
        return true;
      }
      return false;
    });
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (gameOver) {
      setStatus("GameOver");
    }
    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  };

  const timeTravel = (square, index) => {
    setStatus(null);
    setBoard(square);
    setHistory(history.slice(0, index));
    setStepNumber(history.length - 1);
    setXNext(stepNumber % 2 === 0);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setHistory([]);
    setXNext(true);
    setStatus(null);
  };
  return (
    <Board
      timeTravel={(a, b) => timeTravel(a, b)}
      xNext={xNext}
      history={history}
      status={status}
      board={board}
      handleClick={(i) => handleClick(i)}
      reset={() => reset()}
    />
  );
};

export const Board = (props) => {
  let board = props.board;
  let status = props.status;
  let xNext = props.xNext;
  let history = props.history;

  const renderSquare = (i) => {
    return <Square value={board[i]} onClick={() => props.handleClick(i)} />;
  };

  return (
    <main className="board">
      <h2>Status: {status}</h2>
      <p>{!status ? (xNext ? "X's turn" : "O's turn") : ""}</p>
      <button onClick={props.reset}>Reset</button>
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="history">
        {history
          ? history.map((move, position) => {
              return (
                <li key={position}>
                  <button
                    onClick={() => props.timeTravel(move.square, position)}
                  >
                    {move.square}
                  </button>
                </li>
              );
            })
          : ""}
      </div>
    </main>
  );
};

export const Square = (props) => {
  return (
    <button onClick={props.onClick} className="square">
      {props.value}
    </button>
  );
};
