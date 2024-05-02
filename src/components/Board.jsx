import { Square } from "./Square";

export function Board({ board }) {
  return (
    <section className="game">
      {board.map((_, index) => {
        return (
          <Square key={index} index={index}>
            {index}
          </Square>
        );
      })}
    </section>
  );
}
