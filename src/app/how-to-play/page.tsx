// /pages/how-to-play.tsx
"use client";
import React from "react";
import Image from "next/image";
import ShipCard from "@/components/ShipCard";
import { ShipDataProvider, useShipData } from "@/context/ShipDataContext";

const HowToPlayContent = () => {
  const { shipData } = useShipData();

  return (
    <div>
      <h1>How to Play</h1>
      <Image alt="logo" src="/assets/main.png" width={100} height={100} />
      <p>
        Battleship is a strategic guessing game. The game is played on a grid
        where your fleet of ships is hidden, and the computer's fleet is hidden
        on a separate grid. Your objective is to destroy the computer's fleet by
        guessing the locations of its ships. Each turn, you will "fire" at a
        position on the grid, and the computer will inform you if it's a hit or
        miss. The game continues until all of the computer's ships are sunk.
      </p>
      <h2>Ships Overview</h2>
      <div>
        {Object.entries(shipData?.shipTypes || {}).map(
          ([name, { size, count }]) => (
            <ShipCard key={name} name={name} size={size} count={count} />
          )
        )}
      </div>
    </div>
  );
};

export default function HowToPlayPage() {
  return (
    <ShipDataProvider>
      <HowToPlayContent />
    </ShipDataProvider>
  );
}
