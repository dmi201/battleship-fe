import GameBoard from "@/components/GameBoard";
import GameInfo from "@/components/GameInfo";
import { GameStateProvider } from "@/context/GameStateContext";
import { ShipDataProvider } from "@/context/ShipDataContext";

export default function GamePage() {
  return (
    <>
      <ShipDataProvider>
        <GameStateProvider>
          <GameInfo />
          <GameBoard />
        </GameStateProvider>
      </ShipDataProvider>
    </>
  );
}
