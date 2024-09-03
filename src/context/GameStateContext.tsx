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
    boardState: Array(10).fill(Array(10).fill("empty")),
    shipTypes: Array(10).fill(Array(10).fill("")),
    playerHits: [],
    playerMisses: [],
    shipsSunk: [],
    gameOver: false,
  });

  useEffect(() => {
    if (!loading && shipData) {
      const newBoardState = initializeBoardState();
      const newShipTypes = initializeShipTypes();

      setGameState({
        boardState: newBoardState,
        shipTypes: newShipTypes,
        playerHits: [],
        playerMisses: [],
        shipsSunk: [],
        gameOver: false,
      });
    }
  }, [shipData, loading]);

  const makeMove = (x: number, y: number) => {
    if (
      gameState.boardState[x][y] === "hit" ||
      gameState.boardState[x][y] === "miss" ||
      gameState.boardState[x][y] === "sunk"
    ) {
      return;
    }

    const newBoardState = gameState.boardState.map((row) => [...row]);
    const newPlayerHits = [...gameState.playerHits];
    const newPlayerMisses = [...gameState.playerMisses];
    const newShipsSunk = [...gameState.shipsSunk];

    if (newBoardState[x][y] === "ship") {
      newBoardState[x][y] = "hit";
      newPlayerHits.push([x, y]);

      const shipType = gameState.shipTypes[x][y];
      const shipPositions =
        shipData?.layout.find((ship) => ship.ship === shipType)?.positions ||
        [];

      const isSunk = shipPositions.every(
        ([sx, sy]) => newBoardState[sy][sx] === "hit"
      );

      if (isSunk) {
        newShipsSunk.push(shipType);

        shipPositions.forEach(([sx, sy]) => {
          newBoardState[sy][sx] = "sunk";
        });
      }
    } else {
      newBoardState[x][y] = "miss";
      newPlayerMisses.push([x, y]);
    }

    setGameState((prevState) => ({
      ...prevState,
      boardState: newBoardState,
      playerHits: newPlayerHits,
      playerMisses: newPlayerMisses,
      shipsSunk: newShipsSunk,
      gameOver: checkGameOver(newShipsSunk),
    }));
  };

  const checkGameOver = (newShipsSunk: string[]) => {
    return newShipsSunk.length === (shipData ? shipData.layout.length : 0);
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
