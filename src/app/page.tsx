import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import Loading from "./loading";

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-primary-800 text-white p-4 ">
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Cta />
        </Suspense>
      </div>
    </main>
  );
}
