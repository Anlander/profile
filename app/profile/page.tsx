import { CardSection } from "@/components/card-section";
import data from "./items.json";
import { Navigation } from "@/components/navigation";

const page = () => {
  return (
    <div className="px-5 my-24 lg:px-14 flex items-center h-full 2xl:h-full">
      <div className="absolute top-5 left-5 justify-center items-center">
        <Navigation home={true} />
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 lg:max-w-[90%] xl:max-w-[95%] 2xl:max-w-[100%] mx-auto">
        {data.map((el: any, i: number) => (
          <div key={i}>
            <CardSection
              id={el.id}
              title={el.title}
              website={el.website}
              cms={el.cms}
              code={el.code}
              db={el.db}
              frame={el.frame}
              content={el.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
