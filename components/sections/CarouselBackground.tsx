"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1557838923-2985c318be48?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=225&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=300&h=225&fit=crop&auto=format",
];

const RADIUS = 4.5;
const COUNT = IMAGES.length;

function Card({ url, index }: { url: string; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / COUNT) * Math.PI * 2;

  const pos = useMemo(
    () =>
      new THREE.Vector3(
        Math.sin(angle) * RADIUS,
        (index % 2 === 0 ? 0.3 : -0.3),
        Math.cos(angle) * RADIUS
      ),
    [angle, index]
  );

  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh ref={meshRef} position={pos} rotation={[0, -angle + Math.PI, 0]}>
      <planeGeometry args={[2.4, 1.8]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function Carousel() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    const p = state.pointer;
    ref.current.rotation.x += (p.y * 0.08 - ref.current.rotation.x) * 0.02;
    ref.current.rotation.z += (-p.x * 0.08 - ref.current.rotation.z) * 0.02;
  });

  return (
    <group ref={ref} position={[0, 0.5, 0]}>
      {IMAGES.map((url, i) => (
        <Card key={i} url={url} index={i} />
      ))}
    </group>
  );
}

function SceneFallback() {
  return null;
}

export default function CarouselBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.5, 8], fov: 50 }}
        style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#10b981" />
        <Suspense fallback={<SceneFallback />}>
          <Carousel />
        </Suspense>
      </Canvas>
    </div>
  );
}
