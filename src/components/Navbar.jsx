import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-end  m-4">
      <Link className="flex justify-center items-center w-24 h-24 p-2 bg-gray rounded-full" to="/">
        <img className="" src="/bta-logo-light.png" alt="project bta logo" />
      </Link>
      <div className="flex font-abel">
        <Link to="/">Home</Link>        
        <Link to="/mission">Mission</Link>
        <Link to="/campaigns">Campaigns</Link>
        <Link to="/Donate">Donate</Link>
        <button>Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
