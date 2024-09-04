import GameBoard from "@/components/GameBoard";
import GameInfo from "@/components/GameInfo";
import { GameStateProvider } from "@/context/GameStateContext";
import { ShipDataProvider } from "@/context/ShipDataContext";
import { Suspense } from "react";
import Loading from "./loading";

export default function GamePage() {
  return (
    <main className="flex-grow">
      <ShipDataProvider>
        <GameStateProvider>
          <Suspense fallback={<Loading />}>
            <GameInfo />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <GameBoard />
          </Suspense>
        </GameStateProvider>
      </ShipDataProvider>
    </main>
  );
}
