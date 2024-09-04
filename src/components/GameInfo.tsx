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
    <article>
      {" "}
      <div className=" bg-primary-900 text-white shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 ">
        <h1 className="font-heading text-xl sm:text-2xl mb-3 sm:mb-4">
          Game Info
        </h1>
        <div className="space-y-1 sm:space-y-2 text-xs sm:text-lg">
          <p className="flex justify-between">
            <span className="font-medium">Total Hits:</span>
            <span className="font-bold text-accent-500">{totalHits}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Total Misses:</span>
            <span className="font-bold text-secondary-500">{totalMisses}</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium">Total Moves:</span>
            <span className="font-bold">{totalMoves} / 100</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium ">Total Ships Sunk:</span>
            <span className="font-bold">{totalSunkShips} / 5</span>
          </p>
          <p className="flex justify-between">
            <span className="font-medium ">Game Status:</span>
            <span
              className={
                isGameOver
                  ? "text-secondary-500 font-bold"
                  : "text-accent-500 font-bold"
              }
            >
              {isGameOver ? "Game Over" : "In Progress"}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default GameInfo;
