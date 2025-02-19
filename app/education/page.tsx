import data from "./items.json";
import { Navigation } from "@/components/navigation";

const page = () => {
  return (
    <>
      <div className="absolute top-5 left-5">
        <Navigation home={true} />
      </div>
      <div className="grid px-5 pt-14 lg:pt-0 lg:px-0 justify-center h-full lg:h-screen items-center">
        <div className="flex flex-col">
          <h1 className="py-5 text-4xl font-mono hidden lg:block">MY TIMELINE</h1>
          {data.map((el: any, i: number) => (
            <div
              key={i}
              className="pt-10 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20"
            >
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-[#80EF80] rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-[#20EF80]">{el.title}</div>
                <div className="text-lg font-bold">
                  {el.year} - {el.company}
                </div>
                <div className=" text-gray-400 max-w-[80%]">{el.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default page;
