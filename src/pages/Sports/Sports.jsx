import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComonHeaderTitle from "../../components/ComonHeaderTitle/ComonHeaderTitle";
import { useContext } from "react";
import { DataContext } from "../../context/MyContext";
const Sports = () => {
  const { categories, allPosts } = useContext(DataContext);

  return (
    <div className="px-2 lg:px-0 my-5">
      <div className="max-w-screen-2xl mx-auto mb-16">
        <ComonHeaderTitle title="Sports" />
        <div className="grid lg:grid-cols-4 gap-5">
          {allPosts
            ?.filter((item) => item?.category?.category_name === "Sports")
            ?.slice(0, 4)
            ?.map((items, index) => (
              <div key={index}>
                <div>
                  <img className="rounded" src={items?.post_image} alt="" />
                </div>
                <section className="mt-3 space-y-3">
                  <article className="text-2xl font-bold h-[4rem]">
                    {items?.post_title?.slice(0, 60)}
                  </article>
                  <p className="py-5 h-[8rem]">
                    {items?.post_description?.slice(0, 180) + "..."}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sports;
