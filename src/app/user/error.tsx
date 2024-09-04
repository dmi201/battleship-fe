"use client";

import ErrorCard from "@/components/ErrorCard";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <ErrorCard message="An error occurred while loading the User page" />
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-secondary-500 text-white rounded hover:bg-primary-500 transition"
      >
        Try Again
      </button>
    </>
  );
}
