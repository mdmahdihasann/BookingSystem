import SearchBox from "./SearchBox";

const HeroSection = () => {
  return (
    <div className="min-h-[300px] bg-blue-700 flex mt-auto items-end pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-5xl font-semibold text-white">Find your next stay</h2>
        <p className="text-2xl font-normal text-white mt-3">Search deals on hotels, homes, and much more...</p>

        <div className="mt-5 w-[1280px] absolute bottom-[-40px]">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;