import { useState } from "react";
import { Board } from "./components/Board";
import { Square } from "./components/Square";
import { TURNS } from "./constants";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  }

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <Board board={board} updateBoard={updateBoard}/>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
      </main>
    </>
  );
}

export default App;
