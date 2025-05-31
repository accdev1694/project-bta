import { Link } from "react-router-dom";
import DonateLink from "./DonateLink";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=>{
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
  },[setMenuOpen])
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
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex w-6 md:w-8 lg:hidden cursor-pointer"
      >
        <img
          src={!menuOpen && "/images/menu.png"}
          alt={!menuOpen && "Menu Icon"}
        />
      </button>
      {/* Navigation Links */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          ${menuOpen
            ? "absolute flex flex-col fixed w-full inset-0 items-center justify-center z-30 text-white bg-transparent-green gap-4 font-bold text-lg "
            : "hidden lg:flex font-abel gap-6 justify-center items-center"}
        `}
      >
        {menuOpen && (
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="fixed top-3 md:top-6 right-[9.5%] md:right-[10%] bg-secondary p-2 w-8  cursor-pointer"
          >
            <img src="/images/close.png" alt="Close Icon" />
          </button>
        )}
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
          <DonateLink
            href="#donate"
            title="Donate"
            className="bg-secondary text-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
