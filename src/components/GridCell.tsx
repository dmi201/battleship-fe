"use client";

import React from "react";
import Image from "next/image";
import { CellState } from "@/types/game";

type GridCellProps = {
  x: number;
  y: number;
  state: CellState;
  onClick: (x: number, y: number) => void;
  shipType?: string;
};

const GridCell: React.FC<GridCellProps> = ({
  x,
  y,
  state,
  shipType,
  onClick,
}) => {
  const handleClick = () => {
    if (state === "hit" || state === "miss" || state === "sunk") {
      return;
    }
    onClick(x, y);
  };

  const renderCellContent = () => {
    switch (state) {
      case "hit":
        return (
          <Image src="/assets/HitSmall.png" alt="Hit" width={40} height={40} />
        );
      case "miss":
        return (
          <Image
            src="/assets/MissSmall.png"
            alt="Miss"
            width={40}
            height={40}
          />
        );
      case "sunk":
        //TODO: fix shipType undefined problem
        return (
          <Image
            src={
              shipType
                ? `/assets/${shipType}Shape.png`
                : `/assets/carrierShape.png`
            }
            alt={shipType ? shipType : "ship"}
            width={40}
            height={40}
          />
        );
      case "empty":
        return <div className="bg-gray-100 w-full h-full"></div>;
      case "ship":
        return <div className="bg-gray-100 w-full h-full"></div>;
      default:
        return null;
    }
  };

  return (
    <div
      className="aspect-w-1 aspect-h-1 min-h-[5vh] border flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      {renderCellContent()}
    </div>
  );
};

export default GridCell;
