"use client";

import dynamic from "next/dynamic";

const CarouselBackground = dynamic(
  () => import("@/components/sections/CarouselBackground"),
  { ssr: false }
);

export default function ThreeBackground() {
  return <CarouselBackground />;
}
