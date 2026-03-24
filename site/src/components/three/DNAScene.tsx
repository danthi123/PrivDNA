"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Canvas } from "@react-three/fiber";
import DNAHelix from "./DNAHelix";

export interface DragState {
  isDragging: boolean;
  lastX: number;
  velocity: number;
}

interface DNASceneProps {
  className?: string;
}

export default function DNAScene({ className }: DNASceneProps) {
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragState = useRef<DragState>({ isDragging: false, lastX: 0, velocity: 0.003 });
  const [cursor, setCursor] = useState<"grab" | "grabbing">("grab");

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

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragState.current.isDragging = true;
    dragState.current.lastX = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setCursor("grabbing");
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragState.current.isDragging) return;
    const deltaX = e.clientX - dragState.current.lastX;
    dragState.current.velocity = deltaX * 0.005;
    dragState.current.lastX = e.clientX;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    dragState.current.isDragging = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setCursor("grab");
  }, []);

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", cursor }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <ambientLight intensity={0.5} />
        <DNAHelix mouse={mouse} dragState={dragState} />
      </Canvas>
    </div>
  );
}
