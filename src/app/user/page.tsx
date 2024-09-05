"use client";

import dynamic from "next/dynamic";
const LinkedInButton = dynamic(() => import("@/components/LinkedinButton"));
const Cta = dynamic(() => import("@/components/Cta"), {
  ssr: false,
});

import Image from "next/image";
import { useUserData } from "@/context/UserContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import ErrorCard from "@/components/ErrorCard";

const UserContent = () => {
  const { userName, linkedInAccount, isLoggedIn, score, loading, error } =
    useUserData();

  if (loading) <LoadingSpinner />;
  if (error) <ErrorCard message={error} />;

  return (
    <main className="flex-grow">
      {" "}
      <div className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-primary-800 text-white p-4 ">
        {isLoggedIn ? (
          <>
            <h1 className="font-heading text-4xl sm:text-5xl mb-4">
              Some details about you, dear player!
            </h1>
            <Image
              src={"/assets/user.png"}
              alt="User Profile"
              width={150}
              height={150}
              className="rounded-full shadow-lg mb-4"
            />
            <p className="text-xl font-semibold mb-4">{userName}</p>
            <div className="bg-primary-100 rounded-xl mb-4">
              {" "}
              <LinkedInButton
                isLoggedIn={isLoggedIn}
                linkedInAccount={linkedInAccount}
              />
            </div>
            <p className="text-2xl sm:text-3xl text-accent-500 mb-4 ">
              Max score: {score}
            </p>
          </>
        ) : (
          <>
            {" "}
            <Cta />
          </>
        )}
      </div>
    </main>
  );
};

export default function UserPage() {
  return <UserContent />;
}
