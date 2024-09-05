import dynamic from "next/dynamic";

import { GameStateProvider } from "@/context/GameStateContext";
import { ShipDataProvider } from "@/context/ShipDataContext";

const GameInfo = dynamic(() => import("@/components/GameInfo"), {
  ssr: false,
});

const GameBoard = dynamic(() => import("@/components/GameBoard"), {
  ssr: false,
});

export default function GamePage() {
  return (
    <main className="flex-grow">
      <ShipDataProvider>
        <GameStateProvider>
          <GameInfo />
          <GameBoard />
        </GameStateProvider>
      </ShipDataProvider>
    </main>
  );
}
