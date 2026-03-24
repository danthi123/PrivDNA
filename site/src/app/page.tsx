import DNASceneLoader from "@/components/three/DNASceneLoader";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <div className="relative h-screen">
        <DNASceneLoader className="absolute inset-0" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-[clamp(2.5rem,6vw,7rem)] font-bold tracking-tight">
            Priv<span className="text-accent">DNA</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
