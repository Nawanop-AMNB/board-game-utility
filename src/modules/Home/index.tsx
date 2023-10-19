import { useNavigate } from "react-router-dom";
import theCodingImage from "../../assets/the-coding.webp";
import clsx from "clsx";

const navigationItems: { src: string; path?: string }[] = [
  {
    src: theCodingImage,
    path: "the-coding",
  },
];

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto flex flex-col gap-y-8">
      <div className="text-4xl">Board Games</div>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2">
        {navigationItems.map((item, index) => (
          <div className="w-full h-48 md:h-60 p-2">
            <div
              key={item.src + index}
              className={clsx(
                "w-full h-full bg-cover bg-center bg-no-repeat shadow-md transition-transform duration-300 hover:scale-[1.01] rounded-md",
                item.path ? undefined : "pointer-events-none"
              )}
              role="button"
              style={{
                backgroundImage: item.src ? `url('${item.src}')` : undefined,
              }}
              onClick={() => (item.path ? navigate(item.path) : undefined)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
