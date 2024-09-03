import GameBoard from "@/components/GameBoard";
import { GameStateProvider } from "@/context/GameStateContext";
import { ShipDataProvider } from "@/context/ShipDataContext";

export default function GamePage() {
  return (
    <>
      <h1>Game page!</h1>
      <ShipDataProvider>
        <GameStateProvider>
          <GameBoard />
        </GameStateProvider>
      </ShipDataProvider>
    </>
  );
}
