import BreakingNews from "../../shared/BreakingNews";
import Header from "../../shared/Header";
import Navbar from "../../shared/Navbar";
import LeftSideBar from "../../shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../../shared/RightSideBar/RightSideBar";
import Content from "../Content/Content";
import VideoSection from "../VideoSection/VideoSection";
import EntertainmentSection from "../EntertainmentSection/EntertainmentSection";
import Sports from "../Sports/Sports";
import FashionAndMediaHomeSection from "../FashionAndMediaHomeSection/FashionAndMediaHomeSection";
import Footer from "../../shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <BreakingNews />
      <Header />
      <Navbar />
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 lg:gap-8 my-2">
        <div className="col-span-4">
          <Content />
        </div>
        <div className="col-span-1">
          <RightSideBar />
        </div>
      </div>
      <Sports />
      <EntertainmentSection />
      <FashionAndMediaHomeSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Home;
