import { CodeSection } from "@/components/code-section";

export const HeroSection = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute w-full flex flex-col lg:flex-row-reverse gap-14 justify-center items-center h-full ">
        <div className="hidden lg:block absolute bottom-0 right-0">
        </div>
        <div className="h-full absolute top-0 w-full bg-black opacity-90 z-10" />
        <div className="flex flex-col z-20 gap-6 lg:gap-0">
          <span className="block font-bold text-2xl text-left">
            ConsoleWrite("Hello, I'm a
          </span>
          <div className="pb-2 z-20">
            <div className="environment"></div>
            <h2 className="hero glitch layers font-bold" data-text="DEVELOPER"><span>DEVELOPER")</span></h2>
          </div>
          <div className="my-4 hidden lg:block">
            <CodeSection />
          </div>
          <div className="block lg:hidden">
            <pre>
              <code className="text-sm text-gray-400 font-mono whitespace-pre-wrap">
                console.log("My name is Philip Anlander"); <br />
              </code>
            </pre>
          </div>
          </div>
        </div>
      </div> );
    
  };
