export type CellState = "empty" | "hit" | "miss" | "ship" | "sunk";

// Represents the state of the game board as a 2D array of cell states
export type BoardState = CellState[][];

// Represents the state of the game, including the board, player moves, and ships sunk
export type GameState = {
  boardState: BoardState; // Current state of the game board
  playerHits: [number, number][]; // Array of positions where the player has hit
  playerMisses: [number, number][]; // Array of positions where the player has miss
  shipsSunk: string[]; // Array of ship names that have been completely sunk
  gameOver: boolean; // Boolean indicating whether the game is over
  shipTypes: string[][];
};
