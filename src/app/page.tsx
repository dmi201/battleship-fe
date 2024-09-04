"use client";

import { useUserData } from "@/context/UserContext";
import Link from "next/link";

export default function Home() {
  const { userName, isLoggedIn, login, logout, linkedInAccount } =
    useUserData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <button onClick={login} className="p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      ) : (
        <>
          <p className="text-lg font-semibold mb-4">Welcome, {userName}</p>
          <button
            onClick={logout}
            className="p-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
          <Link href="/game">
            <button className="p-2 bg-green-500 text-white rounded mt-4">
              Play New Game
            </button>
          </Link>
          <button
            onClick={() =>
              alert(`LinkedIn: ${linkedInAccount || "Not linked"}`)
            }
            className="p-2 bg-gray-500 text-white rounded mt-4"
          >
            User Details
          </button>
        </>
      )}
    </div>
  );
}
