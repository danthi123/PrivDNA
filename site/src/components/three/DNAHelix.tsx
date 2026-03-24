"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, BufferAttribute } from "three";

import type { DragState } from "./DNAScene";

interface DNAHelixProps {
  mouse: React.RefObject<{ x: number; y: number } | null>;
  dragState: React.RefObject<DragState>;
}

const BASE_SPEED = 0.003;
const FRICTION = 0.95;

// Tall helix spanning the full page scroll
const HELIX_HEIGHT = 40;
const HELIX_TURNS = 20;
const POINTS_PER_TURN = 60;
const PARTICLE_COUNT = 500;

export default function DNAHelix({ mouse, dragState }: DNAHelixProps) {
  const groupRef = useRef<Group>(null);
  const particlesRef = useRef<BufferAttribute>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const { strand1, strand2, rungs, particles } = useMemo(() => {
    const totalPoints = HELIX_TURNS * POINTS_PER_TURN;
    const radius = 1.2;

    const strand1Arr = new Float32Array(totalPoints * 3);
    const strand2Arr = new Float32Array(totalPoints * 3);
    const rungPositions: number[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const t = i / (totalPoints - 1);
      const angle = t * 2 * Math.PI * HELIX_TURNS;
      const y = -HELIX_HEIGHT / 2 + t * HELIX_HEIGHT;

      // Strand 1
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      strand1Arr[i * 3] = x1;
      strand1Arr[i * 3 + 1] = y;
      strand1Arr[i * 3 + 2] = z1;

      // Strand 2
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      strand2Arr[i * 3] = x2;
      strand2Arr[i * 3 + 1] = y;
      strand2Arr[i * 3 + 2] = z2;

      // Rungs every 10th point
      if (i % 10 === 0) {
        rungPositions.push(x1, y, z1, x2, y, z2);
      }
    }

    // Floating particles spread across the full height
    const particleArr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particleArr[i * 3] = (Math.random() - 0.5) * 8;
      particleArr[i * 3 + 1] = (Math.random() - 0.5) * HELIX_HEIGHT * 1.2;
      particleArr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    return {
      strand1: strand1Arr,
      strand2: strand2Arr,
      rungs: new Float32Array(rungPositions),
      particles: particleArr,
    };
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    // Reduced motion: slow gentle rotation only, skip tilt and particle drift
    const speedMultiplier = prefersReducedMotion ? 0.3 : 1;

    // Velocity-based rotation with drag support
    const drag = dragState.current;
    if (drag.isDragging) {
      groupRef.current.rotation.y += drag.velocity * speedMultiplier;
    } else {
      // Lerp velocity toward base speed (flywheel decay)
      drag.velocity = drag.velocity * FRICTION + BASE_SPEED * (1 - FRICTION);
      groupRef.current.rotation.y += drag.velocity * speedMultiplier;
    }

    // Mouse-reactive tilt (skip in reduced motion)
    if (!prefersReducedMotion) {
      const mx = mouse.current?.x ?? 0;
      const my = mouse.current?.y ?? 0;
      groupRef.current.rotation.x += (my * 0.08 - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.z += (mx * -0.05 - groupRef.current.rotation.z) * 0.02;
    }

    // Drift particles upward
    if (particlesRef.current) {
      const arr = particlesRef.current.array as Float32Array;
      const halfH = (HELIX_HEIGHT * 1.2) / 2;
      const driftSpeed = prefersReducedMotion ? 0.001 : 0.003;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3 + 1] += driftSpeed;
        if (arr[i * 3 + 1] > halfH) {
          arr[i * 3 + 1] = -halfH;
        }
      }
      particlesRef.current.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Strand 1 */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[strand1, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00E8C8" transparent opacity={0.6} />
      </line>

      {/* Strand 2 */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[strand2, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00E8C8" transparent opacity={0.6} />
      </line>

      {/* Rungs */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[rungs, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00E8C8" transparent opacity={0.2} />
      </lineSegments>

      {/* Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            ref={particlesRef}
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00E8C8"
          size={0.03}
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export { HELIX_HEIGHT };
