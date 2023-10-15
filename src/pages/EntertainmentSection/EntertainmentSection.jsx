import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import entertainment1 from "../../assets/entertainment1.webp";
import entertainment2 from "../../assets/entertainment2.webp";
import entertainment3 from "../../assets/entertainment3.webp";
import entertainment4 from "../../assets/entertainment4.webp";
import ComonHeaderTitle from "../../components/ComonHeaderTitle/ComonHeaderTitle";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EntertainmentSection = () => {
  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="max-w-screen-2xl mx-auto mb-16">
        <ComonHeaderTitle title="Entertainment" />
        <div className="grid lg:grid-cols-3 gap-5 ">
          <div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet amet amet consectetur adipisicing
                  elit. Facere, ea.
                </p>
              </div>
              <div className="col-span-1">
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={entertainment1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet amet amet consectetur adipisicing
                  elit. Facere, ea.
                </p>
              </div>
              <div className="col-span-1">
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={entertainment2}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet amet amet consectetur adipisicing
                  elit. Facere, ea.
                </p>
              </div>
              <div className="col-span-1">
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={entertainment3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img
                  className="rounded w-full h-[15rem] object-top object-cover "
                  src={entertainment4}
                  alt=""
                />
              </div>
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
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet amet amet consectetur adipisicing
                  elit. Facere, ea.
                </p>
              </div>
              <div className="col-span-1">
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={entertainment1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet amet amet consectetur adipisicing
                  elit. Facere, ea.
                </p>
              </div>
              <div className="col-span-1">
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={entertainment2}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-2">
              <div className="col-span-2 font-semibold">
                <p>
                  Lorem ipsum dolor sit amet amet amet consectetur adipisicing
                  elit. Facere, ea.
                </p>
              </div>
              <div className="col-span-1">
                <div className="h-full w-full">
                  <img
                    className="w-full h-full object-cover rounded"
                    src={entertainment3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentSection;
