import { Link } from "react-router-dom";
import JoinUs from "./JoinUs";
import DonateBtn from "./DonateBtn";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-36 z-10 bg-default">
      <a className="flex justify-center items-center" href="#">
        <img
          className="w-48"
          src="/bta-logo-light.png"
          alt="project bta logo"
        />
      </a>
      <div className="flex font-abel gap-6 justify-center items-center">
        <a className="hover:font-bold  transition" href="#">
          Home
        </a>
        <a className="hover:font-bold transition" href="#mission">
          Mission
        </a>
        <a className="hover:font-bold transition" href="#campaigns">
          Campaigns
        </a>
        <a className="hover:font-bold transition" href="#partners">
          Partners
        </a>
        <div className="flex">
          <DonateBtn />
          <JoinUs />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
