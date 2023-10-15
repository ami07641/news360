import moment from "moment";
import { useEffect, useState } from "react";

const LeftSideBar = () => {
  const [localTime, setLocalTime] = useState(moment().format(" h:mm:ss A"));
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Update the local time immediately when the component mounts
    updateLocalTime();

    // Set up an interval to update the time every second (1000 milliseconds)
    const interval = setInterval(updateLocalTime, 1000);

    // Clear the interval when the component is unmounted to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const updateLocalTime = () => {
    setLocalTime(moment().format("h:mm:ss A"));
  };
  return (
    <div className="space-y-5">
      <div className=" text-center my-5 py-5 rounded-lg  bg-[#F2F2F2] text-basicColor">
        <h1 className="text-3xl">{localTime}</h1>
      </div>
      <div className=" my-5 px-4 py-5 rounded-lg  bg-[#F2F2F2] ">
        <h1 className="text-2xl font-semibold text-slate-500">Category</h1>
        <hr className="my-5" />
        <div>
          {categories.map((category) => (
            <div key={category.id}>
              <button className="space-y-4 py-3">{category?.name}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
