import Image from "next/image";

export default function Hero() {
  return (
    <>
      {" "}
      <h1 className="font-heading text-4xl sm:text-5xl mb-4">Battleship</h1>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8">
        <Image
          src={"/assets/main.jpg"}
          alt="Main image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-sm sm:text-xl max-w-2xl mb-4">
        Get ready to engage in the ultimate naval warfare experience! Plan your
        strategy, command your fleet, and outsmart your opponent in the classic
        game of Battleship.
      </p>
    </>
  );
}
