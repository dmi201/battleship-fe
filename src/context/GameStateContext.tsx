import React, { createContext, useState, ReactNode } from "react";
import { GameState, GameStateContextType } from "../types/game";

export const GameStateContext = createContext<GameStateContextType | undefined>(
  undefined
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const initialBoardState = Array(10).fill(Array(10).fill("empty"));
  const [gameState, setGameState] = useState<GameState>({
    boardState: initialBoardState,
    playerHits: [],
    shipsSunk: [],
    gameOver: false,
  });

  const makeMove = (position: [number, number]) => {
    // Implement move logic here
  };

  const checkGameOver = () => {
    return gameState.shipsSunk.length === 5;
  };

  return (
    <GameStateContext.Provider value={{ gameState, makeMove, checkGameOver }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = React.useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
};
