import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fashion1 from "../../assets/fashion1.webp";
import music1 from "../../assets/music1.jpeg";
import RightSideBar from "../../shared/RightSideBar/RightSideBar";

const FashionAndMediaHomeSection = () => {
  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="max-w-screen-2xl mx-auto mb-16">
        <hr className="my-5 border-basicColor border-2 " />
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="border">
            <h1 className="text-center my-5 text-3xl text-basicColor font-bold">
              Fashion
            </h1>
            <hr />
            <div className="grid grid-cols-2 gap-5 px-5 my-5">
              <div className="pe-5 border-r-2">
                <img
                  className="rounded w-full h-[15rem] object-cover object-top"
                  src={fashion1}
                  alt=""
                />
                <section className="mt-3 space-y-3">
                  <article className="text-2xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </article>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus quas suscipit fuga animi saepe harum nulla rerum
                    sint reiciendis doloremque!
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-basicColor">
                      <button>View Details </button>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="flex space-x-3">
                      <h1>Published : 14 Oct, 2023 </h1>
                    </div>
                  </div>
                </section>
              </div>
              <div className="-mt-8 ">
                <RightSideBar />
              </div>
            </div>
          </div>
          <div className="border">
            <h1 className="text-center my-5 text-3xl text-basicColor font-bold">
              Music
            </h1>
            <hr />
            <div className="grid grid-cols-2 gap-5 px-5 my-5">
              <div className="pe-5 border-r-2">
                <img
                  className="rounded w-full h-[15rem] object-cover object-top"
                  src={music1}
                  alt=""
                />
                <section className="mt-3 space-y-3">
                  <article className="text-2xl font-bold">
                    Lorem ipsum dolor sit amet.
                  </article>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloribus quas suscipit fuga animi saepe harum nulla rerum
                    sint reiciendis doloremque!
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-basicColor">
                      <button>View Details </button>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                    <div className="flex space-x-3">
                      <h1>Published : 14 Oct, 2023 </h1>
                    </div>
                  </div>
                </section>
              </div>
              <div className="-mt-8 ">
                <RightSideBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionAndMediaHomeSection;
