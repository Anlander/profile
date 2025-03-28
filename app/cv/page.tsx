import Image from "next/image";
import cv from "@/public/cv.png";
import { Navigation } from "@/components/navigation";

const page = () => {
  return (
    <>
      <div className="fixed top-5 left-5 justify-center items-center">
        <Navigation home={false} />
      </div>
      <div className="mt-52 lg:mt-0 lg:w-[70%] ml-auto">
        <div>
          <Image src={cv} alt="CV" objectFit="" />
        </div>
      </div>
    </>
  );
};

export default page;
