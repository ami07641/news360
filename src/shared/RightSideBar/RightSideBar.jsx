// import {
//   faFacebook,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import news1 from "../../assets/news1.webp";
import news2 from "../../assets/news2.webp";
import news3 from "../../assets/news3.webp";

const RightSideBar = () => {
  return (
    <div className="space-y-5 my-8">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 font-semibold">
          <p>
            Lorem ipsum dolor sit amet amet amet consectetur adipisicing elit.
            Facere, ea.
          </p>
        </div>
        <div className="col-span-1">
          <div className="h-full w-full">
            <img
              className="w-full h-full object-cover rounded"
              src={news1}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 font-semibold">
          <p>
            Lorem ipsum dolor sit amet amet amet consectetur adipisicing elit.
            Facere, ea.
          </p>
        </div>
        <div className="col-span-1">
          <div className="h-full w-full">
            <img
              className="w-full h-full object-cover rounded"
              src={news2}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />

      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 font-semibold">
          <p>
            Lorem ipsum dolor sit amet amet amet consectetur adipisicing elit.
            Facere, ea.
          </p>
        </div>
        <div className="col-span-1">
          <div className="h-full w-full">
            <img
              className="w-full h-full object-cover rounded"
              src={news3}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <div className=" text-center my-5 py-5 rounded-lg  bg-[#F2F2F2] ">
        <h1 className="text-xl font-semibold text-basicColor">
          Connect With Us
        </h1>
        <hr className="my-5 mx-4" />
        <div className="text-2xl space-x-8">
          <FontAwesomeIcon icon={faFacebook} title="Connect with Facebook" />
          <FontAwesomeIcon icon={faYoutube} title="Connect with Youtube" />
          <FontAwesomeIcon icon={faTwitter} title="Connect with Twiteer" />
        </div>
      </div>
      <div className=" text-center my-5 py-5 rounded-lg  bg-[#F2F2F2] ">
        <div className="text-xl space-y-3 mx-4">
          <button className="font-semibold w-full py-1 rounded bg-basicColor text-white">
            Log In
          </button>
          <br />
          <button className="font-semibold w-full py-1 rounded bg-basicColor text-white">
            Register
          </button>
        </div>
      </div>
      <div className=" my-5 px-4 py-5 rounded-lg  bg-[#F2F2F2] ">
        <h1 className="text-2xl text-center font-bold text-slate-500">
          Any Query ?
        </h1>
        <hr className="my-5" />
        <div>
          <form action="" className="space-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your Name"
              className="px-2 py-2 w-full outline-none focus:outline-basicColor rounded"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your Email"
              className="px-2 py-2 w-full outline-none focus:outline-basicColor rounded"
            />
            <textarea
              className="px-2 py-2  w-full h-40 outline-none focus:outline-basicColor rounded"
              id="description"
              name="description"
              rows="4"
              placeholder="Enter your Query"
            />
            <button className="font-semibold w-full py-2 rounded bg-basicColor text-white">
              Submit
            </button>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default RightSideBar;
