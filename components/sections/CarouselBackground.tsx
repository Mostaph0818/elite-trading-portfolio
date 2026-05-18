"use client";

import { useRef, useMemo, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { IMAGES } from "@/lib/constants";

const RADIUS = 4.5;
const COUNT = IMAGES.carousel.length;

function createFallbackTexture(index: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 225;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, 300, 225);
    const colors = ["#0ea5e9", "#10b981", "#8b5cf6", "#f59e0b", "#ef4444", "#ec4899", "#06b6d4", "#84cc16"];
    gradient.addColorStop(0, colors[index % colors.length]);
    gradient.addColorStop(1, colors[(index + 3) % colors.length]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 300, 225);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("📊", 150, 112);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

function Card({ url, index }: { url: string; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture>(() => createFallbackTexture(index));
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

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => {
      const tex = new THREE.Texture(img);
      tex.needsUpdate = true;
      setTexture(tex);
    };
  }, [url, index]);

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
      {IMAGES.carousel.map((url, i) => (
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
