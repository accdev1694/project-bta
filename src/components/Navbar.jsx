import { Link } from "react-router-dom";
import DonateLink from "./DonateLink";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    // Navigation Bar
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-[10%] z-10 bg-white border-b-accent">

      {/* Logo */}
      <a className="flex justify-center items-center" href="#">
        <img
          className="w-28 md:w-48"
          src="/bta-logo-light.png"
          alt="project bta logo"
        />
      </a>

      {/* Burger Menu */}
      <button className="flex w-8 lg:hidden"><img src="/images/menu.png" alt="Menu Icon" /></button>
      {/* Navigation Links */}
      <div className="hidden lg:flex font-abel gap-6 justify-center items-center">
        <a className="hover:font-bold  transition" href="#">
          Home
        </a>
        <a className="hover:font-bold transition" href="#mission">
          Mission
        </a>
        <a className="hover:font-bold transition" href="#campaigns">
          Campaigns
        </a>
        <a className="hover:font-bold transition" href="#team">
          Team
        </a>
        <div className="flex">
          <DonateLink href="#donate" title="Donate" className="bg-secondary text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
