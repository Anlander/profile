import Image from "next/image";
import profile from "@/public/profile.png";
import { Navigation } from "./navigation";

export const HeroSection = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute w-full flex flex-col lg:flex-row-reverse gap-14 justify-center items-center h-full ">
        <div className="hidden lg:block">
          <Image src={profile} alt="Philip Anlander" />
        </div>
        <div className="flex flex-col">
          <span className="hidden lg:block font-bold text-2xl text-left">
            Hello, I'm
          </span>

          <h1 className="text-[#80EF80] font-mono text-6xl lg:text-9xl z-10 font-bold">
            PHILIP <br />
            ANLANDER
          </h1>

          <div className="flex mt-5 lg:mt-0 justify-between">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};
