"use client";

import React from "react";
import Image from "next/image";

type GridCellProps = {
  x: number;
  y: number;
  state: "empty" | "ship" | "hit" | "miss";
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
      case "ship":
        return (
          <Image
            src={`/assets/${shipType}Shape.png`} // Dynamically use the correct ship image
            alt={shipType}
            width={40}
            height={40}
          />
        );
      case "empty":
        return <div className="bg-gray-100 w-full h-full"></div>;

      default:
        return null;
    }
  };

  return (
    <div
      className="w-10 h-10 border flex items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      {renderCellContent()}
    </div>
  );
};

export default GridCell;
