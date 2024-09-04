"use client";

import { useUserData } from "@/context/UserContext";
import Link from "next/link";

export default function Cta() {
  const { userName, isLoggedIn, login } = useUserData();

  return (
    <>
      {!isLoggedIn ? (
        <>
          {" "}
          <p className="text-white text-lg font-semibold mb-4">
            Are you excited to play ???
          </p>
          <button
            onClick={login}
            className="p-3 px-6 bg-accent-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-accent-600 transition-all duration-300"
          >
            Login
          </button>
        </>
      ) : (
        <>
          <p className="text-white text-lg font-semibold mb-4">
            Welcome, {userName}
          </p>
          <Link href="/game">
            <button className="p-3 px-6 bg-accent-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-accent-600 transition-all duration-300">
              New Game
            </button>
          </Link>
        </>
      )}
    </>
  );
}
