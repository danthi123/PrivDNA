"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface DNAHelixProps {
  mouse: React.RefObject<{ x: number; y: number } | null>;
}

export default function DNAHelix({ mouse }: DNAHelixProps) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.BufferAttribute>(null);

  const { strand1, strand2, rungs, particles } = useMemo(() => {
    const turns = 4;
    const pointsPerTurn = 60;
    const totalPoints = turns * pointsPerTurn;
    const radius = 1.2;
    const height = 8;

    const strand1Arr = new Float32Array(totalPoints * 3);
    const strand2Arr = new Float32Array(totalPoints * 3);
    const rungPositions: number[] = [];

    for (let i = 0; i < totalPoints; i++) {
      const t = i / (totalPoints - 1);
      const angle = t * 2 * Math.PI * turns;
      const y = -height / 2 + t * height;

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

    // Floating particles
    const particleCount = 200;
    const particleArr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particleArr[i * 3] = (Math.random() - 0.5) * 6;
      particleArr[i * 3 + 1] = (Math.random() - 0.5) * height * 1.5;
      particleArr[i * 3 + 2] = (Math.random() - 0.5) * 6;
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

    // Slow rotation
    groupRef.current.rotation.y += 0.003;

    // Mouse-reactive tilt
    const mx = mouse.current?.x ?? 0;
    const my = mouse.current?.y ?? 0;
    groupRef.current.rotation.x += (my * 0.08 - groupRef.current.rotation.x) * 0.02;
    groupRef.current.rotation.z += (mx * -0.05 - groupRef.current.rotation.z) * 0.02;

    // Drift particles upward
    if (particlesRef.current) {
      const arr = particlesRef.current.array as Float32Array;
      const height = 8;
      const halfH = (height * 1.5) / 2;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3 + 1] += 0.003;
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
