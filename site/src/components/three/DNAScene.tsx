"use client";

import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import DNAHelix from "./DNAHelix";

interface DNASceneProps {
  className?: string;
}

export default function DNAScene({ className }: DNASceneProps) {
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <DNAHelix mouse={mouse} />
      </Canvas>
    </div>
  );
}
