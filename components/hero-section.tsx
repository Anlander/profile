import Image from "next/image";
import profile from "@/public/profile.png";
import { Navigation } from "./navigation";

export const HeroSection = () => {
return (
<div className="h-screen relative">
  <div className="absolute w-full flex flex-col lg:flex-row-reverse gap-14 justify-center items-center h-full ">
    <div className="hidden lg:block absolute bottom-0 right-0">
    </div>
    <video className="absolute h-full w-full object-cover" autoPlay loop muted>
      <source src="/background/background.mp4" type="video/mp4" />
    </video>
    <div className="h-full absolute top-0 w-full bg-black opacity-90 z-10" />
    <div className="flex flex-col z-20">
      <span className="hidden lg:block font-bold text-2xl text-left">
        ConsoleWrite("Hello, I'm a
      </span>
      <div className="py-5 z-20">
        <div className="environment"></div>
        <h2 className="hero glitch layers font-bold" data-text="DEVELOPER"><span>DEVELOPER")</span></h2>
      </div>
      <div className="my-10">
        <pre className="flex flex-col gap-2">
          <code>
            string name = "Philip Anlander";
          </code>
          <code>
            int age = 23;
          </code>
          <code>
            const location = "Sweden";
          </code>
        </pre>
      </div>
    <div className="flex mt-5 lg:mt-0 justify-between z-20">
        <Navigation />
      </div>
    </div>
  </div>
</div>
);
};
