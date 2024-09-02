export type CellState = "hit" | "miss" | "empty";

// Represents the state of the game board as a 2D array of cell states
export type BoardState = CellState[][];

// Represents the state of the game, including the board, player moves, and ships sunk
export type GameState = {
  boardState: BoardState; // Current state of the game board
  playerHits: [number, number][]; // Array of positions where the player has hit
  shipsSunk: string[]; // Array of ship names that have been completely sunk
  gameOver: boolean; // Boolean indicating whether the game is over
};

// Context type for managing the game state within a context provider
export type GameStateContextType = {
  gameState: GameState; // The current game state
  makeMove: (position: [number, number]) => void; // Function to handle player moves
  checkGameOver: () => boolean; // Function to check if the game is over
};
