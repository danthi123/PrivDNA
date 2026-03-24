"use client";

import dynamic from "next/dynamic";

const DNAScene = dynamic(() => import("./DNAScene"), {
  ssr: false,
});

interface DNASceneLoaderProps {
  className?: string;
}

export default function DNASceneLoader({ className }: DNASceneLoaderProps) {
  return <DNAScene className={className} />;
}
