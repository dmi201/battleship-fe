/* eslint-disable react/no-unescaped-entities */
"use client";
import dynamic from "next/dynamic";
const ShipCard = dynamic(() => import("@/components/ShipCard"));

import Image from "next/image";
import { ShipDataProvider, useShipData } from "@/context/ShipDataContext";
import Cta from "@/components/Cta";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorCard from "@/components/ErrorCard";

const HowToPlayContent = () => {
  const { shipData, loading, error } = useShipData();

  if (loading) <LoadingSpinner />;
  if (error) <ErrorCard message={error} />;

  return (
    <main className="flex-grow">
      {" "}
      <div className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-primary-800 text-white px-4 py-8">
        <h1 className="font-heading text-4xl sm:text-5xl mb-4">How to Play</h1>
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8">
          <Image
            alt="Main image"
            src="/assets/main.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <p className="text-sm sm:text-lg max-w-3xl mb-8">
          Battleship is a strategic guessing game. The game is played on a grid
          where your fleet of ships is hidden, and the computer's fleet is
          hidden on a separate grid. Your objective is to destroy the computer's
          fleet by guessing the locations of its ships. Each turn, you will
          "fire" at a position on the grid, and the computer will inform you if
          it's a hit or miss. The game continues until all of the computer's
          ships are sunk.
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl mb-6">
          Ships Overview
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {Object.entries(shipData?.shipTypes || {}).map(
            ([name, { size, count }]) => (
              <ShipCard key={name} name={name} size={size} count={count} />
            )
          )}
        </div>
        <Cta />
      </div>
    </main>
  );
};

export default function HowToPlayPage() {
  return (
    <ShipDataProvider>
      <HowToPlayContent />
    </ShipDataProvider>
  );
}
