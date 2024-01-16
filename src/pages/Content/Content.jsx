import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { DataContext } from "../../context/MyContext";
import { Link } from "react-router-dom";
const Content = () => {
  const { allPosts } = useContext(DataContext);
  // http://192.168.0.185/business-in-bangladesh/public/uploads/post/
  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="grid lg:grid-cols-3 gap-5">
        {allPosts?.slice(0, 5)?.map((item, index) => (
          <>
            {index === 0 ? (
              <div className="col-span-2 grid grid-cols-2 gap-5">
                <div>
                  <img
                    src={`item?.post_image`}
                    alt=""
                    className="h-full w-full object-contain rounded"
                  />
                </div>
                <div className="py-2">
                  <h1
                    className="text-2xl font-bold lg:h-[4rem]"
                    title={item?.post_title}
                  >
                    {item?.post_title.slice(0, 60)}
                  </h1>
                  <p className="py-5 lg:h-[8rem]">
                    {item?.post_description.slice(0, 180) + "...."}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-basicColor">
                      <Link to={`/news-details/${20}`}>
                        View Details
                        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                      </Link>
                    </div>
                    <div className="lg:flex space-x-3 hidden">
                      <h1>Published : {item?.post_created_on}</h1>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              </div>
            ) : (
              <div className="py-2">
                <h1
                  className="text-2xl font-bold lg:h-[4rem] "
                  title={item?.post_title}
                >
                  {item?.post_title.slice(0, 60)}
                </h1>
                <p className="py-5 lg:h-[8rem] ">
                  {item?.post_description.slice(0, 160) + "...."}
                </p>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center space-x-3 text-basicColor">
                    <Link to={`/news-details/${20}`}>
                      View Details
                      <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </Link>
                  </div>
                  <div className="lg:flex space-x-3 hidden">
                    <h1>Published : 14 Oct, 2023 </h1>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Content;
