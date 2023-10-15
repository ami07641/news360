import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ComonHeaderTitle = ({ title }) => {
  return (
    <div>
      <hr className="my-5 border-basicColor border-2 " />
      <div className="flex items-center space-x-5 mb-5">
        <h1 className="text-2xl font-bold">{title}</h1>
        <FontAwesomeIcon
          className="text-xl text-basicColor"
          icon={faArrowRight}
        />
      </div>
    </div>
  );
};

export default ComonHeaderTitle;
