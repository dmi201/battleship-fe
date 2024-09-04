import React from "react";
import Image from "next/image";

type ShipCardProps = {
  name: string;
  size: number;
  count: number;
};

const ShipCard: React.FC<ShipCardProps> = ({ name, size, count }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <Image
        src={`/assets/${name}Shape.png`}
        alt={name}
        width={100}
        height={100}
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p>Size: {size}</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default ShipCard;
