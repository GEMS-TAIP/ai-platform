import Image from "next/image";
import Hero from "@/components/pages/hero.tsx"
import Features from "@/components/pages/features.tsx"
import Quickstart from "@/components/pages/quickstart.tsx"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Quickstart />
    </>
  );
}
