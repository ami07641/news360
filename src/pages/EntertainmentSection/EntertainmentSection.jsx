import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComonHeaderTitle from "../../components/ComonHeaderTitle/ComonHeaderTitle";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RightSideBar from "../../shared/RightSideBar/RightSideBar";
import { useContext } from "react";
import { DataContext } from "../../context/MyContext";

const EntertainmentSection = () => {
  const { categories, filterItem } = useContext(DataContext);
  // console.log(allPosts);

  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="max-w-screen-2xl mx-auto mb-16">
        <ComonHeaderTitle title="Entertainment" />
        <div className="grid lg:grid-cols-3 gap-5 ">
          <div>
            {filterItem.slice(1, 5).map((items, index) => (
              <div key={index} className="col-span-1 grid grid-rows-3 gap-5 ">
                <div className="row-span-3">
                  <RightSideBar items={items}></RightSideBar>
                </div>
              </div>
            ))}
          </div>
          <div>
            {filterItem?.map((items, index) => (
              <div key={index}>
                {index === 0 && (
                  <div>
                    <div className="h-[230px] w-full ">
                      <img
                        src={items?.post_image}
                        alt=""
                        className="h-full w-full object-cover rounded"
                      />
                    </div>
                    <div className="py-2">
                      <h1
                        className="text-2xl font-bold lg:h-[4rem]"
                        title={items?.post_title}
                      >
                        {items?.post_title.slice(0, 60)}
                      </h1>
                      <p className="py-5 lg:h-[8rem]">
                        {items?.post_description.slice(0, 180) + "...."}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-basicColor">
                          <button>View Details </button>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="lg:flex space-x-3 hidden">
                          <h1>Published : {items?.post_created_on}</h1>
                        </div>
                      </div>
                      <hr className="my-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            {filterItem.slice(3, 7).map((items, index) => (
              <div key={index} className="col-span-1 grid grid-rows-3 gap-5 ">
                <div className="row-span-3">
                  <RightSideBar items={items}></RightSideBar>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntertainmentSection;
