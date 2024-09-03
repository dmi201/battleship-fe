"use client";

import GridCell from "./GridCell";
import { useGameState } from "@/context/GameStateContext";

const GameBoard: React.FC = () => {
  const { gameState, makeMove } = useGameState();

  return (
    <div className="grid grid-cols-10">
      {gameState.boardState.map((row, rowIndex) =>
        row.map((cellState, colIndex) => {
          const shipType =
            cellState === "ship"
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
};

export default GameBoard;
