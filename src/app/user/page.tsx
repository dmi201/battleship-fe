"use client";

import Image from "next/image";
import { useUserData } from "@/context/UserContext";

export default function UserPage() {
  const { userName, linkedInAccount, isLoggedIn, score } = useUserData();

  return (
    <>
      {isLoggedIn && (
        <>
          {" "}
          <h1>User details</h1>
          <Image
            src={"/assets/user.png"}
            alt="User Profile"
            width={100}
            height={100}
            className="rounded-full my-2"
          />
          <p>{userName}</p>
          <p>{linkedInAccount}</p>
          <p>{score}</p>
        </>
      )}
    </>
  );
}
