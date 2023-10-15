import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import news from "../../assets/news.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Content = () => {
  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="grid lg:grid-cols-3 gap-5">
        <div>
          <img
            src={news}
            alt=""
            className="h-full w-full object-contain rounded"
          />
        </div>
        <div className="py-2">
          <h1 className="text-2xl font-bold">
            Shakib, Williamson to undergo scans on injuries
          </h1>
          <p className="py-5">
            After Friday's game against New Zealand, Bangladesh captain Shakib
            al Hasan was taken for a scan. Shakib hurt his left quad during the
            game. His opposite number.
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
        </div>
        <div className=" border-l-2 ps-5">
          <div className="py-2">
            <h1 className="text-2xl font-bold">
              Shakib, Williamson to undergo scans on injuries
            </h1>
            <p className="py-5">
              After Friday's game against New Zealand, Bangladesh captain Shakib
              al Hasan was taken for a scan. Shakib hurt his left quad during
              the game. His opposite number.
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
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="grid lg:grid-cols-3 gap-5 ">
        <div className="py-2">
          <h1 className="text-2xl font-bold">
            Shakib, Williamson to undergo scans on injuries
          </h1>
          <p className="py-5">
            After Friday's game against New Zealand, Bangladesh captain Shakib
            al Hasan was taken for a scan. Shakib hurt his left quad during the
            game. His opposite number.
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
        </div>
        <div className=" border-l-2 ps-5">
          <div className="py-2">
            <h1 className="text-2xl font-bold">
              Shakib, Williamson to undergo scans on injuries
            </h1>
            <p className="py-5">
              After Friday's game against New Zealand, Bangladesh captain Shakib
              al Hasan was taken for a scan. Shakib hurt his left quad during
              the game. His opposite number.
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
          </div>
        </div>
        <div className=" border-l-2 ps-5">
          <div className="py-2">
            <h1 className="text-2xl font-bold">
              Shakib, Williamson to undergo scans on injuries
            </h1>
            <p className="py-5">
              After Friday's game against New Zealand, Bangladesh captain Shakib
              al Hasan was taken for a scan. Shakib hurt his left quad during
              the game. His opposite number.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
