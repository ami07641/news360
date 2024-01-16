import RightSideBar from "../../shared/RightSideBar/RightSideBar";
import Content from "../Content/Content";
import VideoSection from "../VideoSection/VideoSection";
import EntertainmentSection from "../EntertainmentSection/EntertainmentSection";
import Sports from "../Sports/Sports";
import FashionAndMediaHomeSection from "../FashionAndMediaHomeSection/FashionAndMediaHomeSection";
import { useContext } from "react";
import { DataContext } from "../../context/MyContext";

const Home = () => {
  const { categories, allPosts } = useContext(DataContext);

  // console.log("allPost", allPosts);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 lg:gap-8 my-2">
        <div className="col-span-4">
          <Content />
        </div>
        <div className="col-span-1">
          {allPosts
            ?.filter(
              (item) => item?.category?.category_name === "Entertainment"
            )
            ?.slice(0, 4)
            ?.map((items, index) => (
              <RightSideBar key={index} items={items}></RightSideBar>
            ))}
        </div>
      </div>
      <Sports />
      <EntertainmentSection />
      <FashionAndMediaHomeSection />
      <VideoSection />
    </div>
  );
};

export default Home;
