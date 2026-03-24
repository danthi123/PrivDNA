"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import DNAHelix, { HELIX_HEIGHT } from "./DNAHelix";

export interface DragState {
  isDragging: boolean;
  lastX: number;
  velocity: number;
}

interface DNASceneProps {
  className?: string;
  scrollProgress?: React.RefObject<number>;
}

// Inner component that drives the camera based on scroll progress
function ScrollCamera({
  scrollProgress,
}: {
  scrollProgress?: React.RefObject<number>;
}) {
  const { camera } = useThree();

  // Camera pans from top of helix to bottom based on scroll
  const topY = HELIX_HEIGHT / 2 - 2; // start near top
  const bottomY = -HELIX_HEIGHT / 2 + 2; // end near bottom

  useFrame(() => {
    const progress = scrollProgress?.current ?? 0;
    const targetY = topY + (bottomY - topY) * progress;
    // Smooth lerp so camera movement feels fluid
    camera.position.y += (targetY - camera.position.y) * 0.1;
  });

  return null;
}

export default function DNAScene({ className, scrollProgress }: DNASceneProps) {
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragState = useRef<DragState>({
    isDragging: false,
    lastX: 0,
    velocity: 0.003,
  });
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
        camera={{ position: [0, HELIX_HEIGHT / 2 - 2, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: "transparent", cursor }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <ambientLight intensity={0.5} />
        <ScrollCamera scrollProgress={scrollProgress} />
        <DNAHelix mouse={mouse} dragState={dragState} />
      </Canvas>
    </div>
  );
}
