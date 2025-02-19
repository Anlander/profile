import { HeroSection } from "@/components/hero-section";
import { Code2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <span className="text-xl items-center font-bold font-mono flex gap-2 absolute top-5 left-5 text-[#80EF80]">
        <Code2 />
        Anlander.
      </span>

      <HeroSection />
    </main>
  );
}
