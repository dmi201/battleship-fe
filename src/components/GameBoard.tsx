"use client";

import GridCell from "./GridCell";
import { useGameState } from "@/context/GameStateContext";

export default function GameBoard() {
  const { gameState, makeMove } = useGameState();

  return (
    <div className="grid grid-cols-10 gap-0 w-full min-h-[40vh] max-w-screen-lg mx-auto">
      {gameState.boardState.map((row, rowIndex) =>
        row.map((cellState, colIndex) => {
          const shipType =
            cellState === "ship" || cellState === "hit"
              ? gameState.shipTypes[rowIndex][colIndex]
              : undefined;
          return (
            <GridCell
              key={`${rowIndex}-${colIndex}`}
              x={rowIndex}
              y={colIndex}
              state={cellState}
              shipType={shipType}
              onClick={makeMove}
            />
          );
        })
      )}
    </div>
  );
}
