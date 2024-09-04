"use client";

import { useUserData } from "@/context/UserContext";
import LinkedInButton from "./LinkedinButton";

export default function Footer() {
  const { userName, isLoggedIn, linkedInAccount } = useUserData();

  return (
    <footer className="bg-primary-100 text-primary-900 px-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Battleship.{" "}
          {isLoggedIn && <span>By {userName}</span>}
        </p>
        <LinkedInButton
          isLoggedIn={isLoggedIn}
          linkedInAccount={linkedInAccount}
        />
      </div>
    </footer>
  );
}
