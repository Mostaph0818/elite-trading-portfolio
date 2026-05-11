"use client";

import dynamic from "next/dynamic";

const ThreeBackground = dynamic(
  () => import("@/components/sections/ThreeBackground"),
  { ssr: false }
);

export default function HeroThreeWrapper() {
  return <ThreeBackground />;
}
