"use client";

import dynamic from "next/dynamic";

const DNAScene = dynamic(() => import("./DNAScene"), {
  ssr: false,
});

interface DNASceneLoaderProps {
  className?: string;
  scrollProgress?: React.RefObject<number>;
}

export default function DNASceneLoader({ className, scrollProgress }: DNASceneLoaderProps) {
  return <DNAScene className={className} scrollProgress={scrollProgress} />;
}
