import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"));
const Cta = dynamic(() => import("@/components/Cta"), {
  ssr: false,
});

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
