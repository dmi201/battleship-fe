/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex-grow">
      {" "}
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-primary-800 text-white p-6 text-center">
        <h1 className="text-secondary-500 font-heading text-6xl sm:text-8xl mb-8">
          404
        </h1>
        <Image
          src="/assets/main.jpg"
          alt="Page Not Found"
          width={200}
          height={200}
          className="mb-8"
        />
        <p className="text-xl sm:text-2xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="p-3 px-6 bg-accent-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-accent-600 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
