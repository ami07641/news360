import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sports1 from "../../assets/sports1.webp";
import sports2 from "../../assets/sports2.webp";
import sports3 from "../../assets/sports3.webp";
import sports4 from "../../assets/sports4.webp";
import ComonHeaderTitle from "../../components/ComonHeaderTitle/ComonHeaderTitle";
const Sports = () => {
  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="max-w-screen-2xl mx-auto mb-16">
        <ComonHeaderTitle title="Sports" />
        <div className="grid lg:grid-cols-4 gap-5">
          <div>
            <img className="rounded" src={sports1} alt="" />
            <section className="mt-3 space-y-3">
              <article className="text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </article>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus quas suscipit fuga animi saepe harum nulla rerum sint
                reiciendis doloremque!
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
          <div>
            <img className="rounded" src={sports2} alt="" />
            <section className="mt-3 space-y-3">
              <article className="text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </article>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus quas suscipit fuga animi saepe harum nulla rerum sint
                reiciendis doloremque!
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
          <div>
            <img className="rounded" src={sports3} alt="" />
            <section className="mt-3 space-y-3">
              <article className="text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </article>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus quas suscipit fuga animi saepe harum nulla rerum sint
                reiciendis doloremque!
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
          <div>
            <img className="rounded" src={sports4} alt="" />
            <section className="mt-3 space-y-3">
              <article className="text-2xl font-bold">
                Lorem ipsum dolor sit amet.
              </article>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus quas suscipit fuga animi saepe harum nulla rerum sint
                reiciendis doloremque!
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
      </div>
    </div>
  );
};

export default Sports;
