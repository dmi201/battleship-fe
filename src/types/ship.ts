// Represents a single ship type (e.g., carrier, battleship) with its size and quantity
export type ShipType = {
  size: number;
  count: number;
};

// Represents the positions of a single ship on the board
export type ShipLayout = {
  ship: string; // Name of the ship (e.g., "carrier")
  positions: [number, number][]; // Array of positions, each represented as [row, column]
};

// Represents the overall data structure for ships, including the types of ships and their layout on the board
export type ShipData = {
  shipTypes: Record<string, ShipType>; // Record of ship names to their types
  layout: ShipLayout[]; // Array of ship layouts
};
