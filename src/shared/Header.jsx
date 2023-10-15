import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <p className="font-semibold my-2">
          <FontAwesomeIcon className="mx-3 text-basicColor" icon={faCalendar} />
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
        <div className="text-xl space-x-8">
          <FontAwesomeIcon icon={faFacebook} title="Connect with Facebook" />
          <FontAwesomeIcon icon={faYoutube} title="Connect with Youtube" />
          <FontAwesomeIcon icon={faTwitter} title="Connect with Twiteer" />
        </div>
      </div>
      <hr className="" />
      <div className="text-center my-5">
        <h1 className=" text-6xl font-serif font-semibold mt-4 mb-2 text-basicColor">
          News 360
        </h1>
        <p className="text-slate-500 ">Journalism Without Fear or Favor</p>
      </div>
    </div>
  );
};

export default Header;
