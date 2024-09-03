"use client";

import React from "react";
import { useGameState } from "@/context/GameStateContext";

const GameInfo: React.FC = () => {
  const { gameState } = useGameState();

  const totalHits = gameState.playerHits.length;
  const totalMisses = gameState.playerMisses.length;
  const totalMoves = totalHits + totalMisses;
  const totalSunkShips = gameState.shipsSunk.length;
  const isGameOver = gameState.gameOver;

  return (
    <div>
      <h2>Game Info</h2>
      <p>Total Hits: {totalHits}</p>
      <p>Total Misses: {totalMisses}</p>
      <p>Total Moves: {totalMoves} / 100</p>{" "}
      <p>Total Ships Sunk: {totalSunkShips} / 5</p>
      <p>
        Game Status:{" "}
        {isGameOver ? (
          <span className="text-red-500">Game Over</span>
        ) : (
          <span className="text-green-500">In Progress</span>
        )}
      </p>
    </div>
  );
};

export default GameInfo;
