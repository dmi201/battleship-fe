import React from "react";
import Image from "next/image";

type ShipCardProps = {
  name: string;
  size: number;
  count: number;
};

const ShipCard: React.FC<ShipCardProps> = ({ name, size, count }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-lg bg-white flex flex-col items-center">
      <Image
        src={`/assets/${name}Shape.png`}
        alt={name}
        width={80}
        height={80}
        className="rounded-md"
      />
      <h2 className="text-xl font-semibold mt-4 text-primary-800">{name}</h2>
      <p className="text-gray-700">Size: {size}</p>
      <p className="text-gray-700">Count: {count}</p>
    </div>
  );
};

export default ShipCard;
