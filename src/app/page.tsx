import Cta from "@/components/Cta";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-primary-800 text-white p-4 ">
        <Hero />
        <Cta />
      </div>
    </main>
  );
}
