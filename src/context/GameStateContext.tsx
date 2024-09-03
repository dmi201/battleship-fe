"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useShipData } from "./ShipDataContext";
import { GameState, GameStateContextType, BoardState } from "../types/game";

const GameStateContext = createContext<GameStateContextType | undefined>(
  undefined
);

export const GameStateProvider = ({ children }: { children: ReactNode }) => {
  const { shipData, loading, error } = useShipData();

  const initializeBoardState = (): BoardState => {
    const boardState: BoardState = Array(10)
      .fill(null)
      .map(() => Array(10).fill("empty"));

    if (shipData) {
      shipData.layout.forEach(({ ship, positions }) => {
        positions.forEach(([x, y]) => {
          boardState[y][x] = "ship";
        });
      });
    }

    return boardState;
  };

  const initializeShipTypes = () => {
    const shipTypes: string[][] = Array(10)
      .fill(null)
      .map(() => Array(10).fill(""));

    if (shipData) {
      shipData.layout.forEach(({ ship, positions }) => {
        positions.forEach(([x, y]) => {
          shipTypes[y][x] = ship;
        });
      });
    }

    return shipTypes;
  };

  const [gameState, setGameState] = useState<GameState>({
    boardState: initializeBoardState(),
    shipTypes: initializeShipTypes(),
    playerHits: [],
    shipsSunk: [],
    gameOver: false,
  });

  useEffect(() => {
    if (!loading && shipData) {
      setGameState({
        boardState: initializeBoardState(),
        shipTypes: initializeShipTypes(),
        playerHits: [],
        shipsSunk: [],
        gameOver: false,
      });
    }
  }, [shipData, loading]);

  const makeMove = (x: number, y: number) => {
    const newBoardState = gameState.boardState.map((row) => [...row]);
    if (newBoardState[x][y] === "ship") {
      newBoardState[x][y] = "hit";
    } else {
      newBoardState[x][y] = "miss";
    }
    setGameState((prevState) => ({
      ...prevState,
      boardState: newBoardState,
    }));
  };

  const checkGameOver = () => {
    return (
      gameState.shipsSunk.length === (shipData ? shipData.layout.length : 0)
    );
  };

  return (
    <GameStateContext.Provider value={{ gameState, makeMove, checkGameOver }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
};
