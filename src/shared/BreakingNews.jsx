import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-basicColor mb-2">
      <div className="flex lg:px-0 px-5 max-w-screen-2xl mx-auto">
        <button className="w-[10rem] py-4 text-white font-semibold">
          Breaking News
        </button>
        <Marquee pauseOnHover={true} speed={100}>
          <p className="text-white">
            World Cup: Adjusting to variety of surfaces in India is huge
            challenge for all teams, says Kane Williamson
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
