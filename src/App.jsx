import { Board } from "./components/Board";

function App() {
  const board = Array(9).fill(null);

  return (
    <>
      <main className="board">
        <h1>Tic Tac Toe</h1>
        <Board board={board}/>
      </main>
    </>
  );
}

export default App;
