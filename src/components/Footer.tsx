"use client";

import Image from "next/image";
import Link from "next/link";
import { PopoverGroup } from "@headlessui/react";
import { useUserData } from "@/context/UserContext";

export default function Footer() {
  const { userName, isLoggedIn, linkedInAccount } = useUserData();

  return (
    <footer className="bg-gray-800 text-white px-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Battleship.{" "}
          {isLoggedIn && <span>By {userName}</span>}
        </p>
        <PopoverGroup>
          <Link
            href={isLoggedIn ? linkedInAccount : "https://www.linkedin.com"}
            target="_blank"
          >
            <Image
              src="/assets/linkedIn.svg"
              alt="LinkedIn"
              width={50}
              height={50}
            />
          </Link>
        </PopoverGroup>
      </div>
    </footer>
  );
}
