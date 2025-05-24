import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link
        className="flex justify-center items-center"
        to="/"
      >
        <img className="w-48" src="/bta-logo-light.png" alt="project bta logo" />
      </Link>
      <div className="flex font-abel gap-6 justify-center items-center">
        <Link className="hover:font-bold  transition" to="/">Home</Link>
        <Link className="hover:font-bold transition" to="/mission">Mission</Link>
        <Link className="hover:font-bold transition" to="/campaigns">Campaigns</Link>
        <Link className="hover:font-bold transition" to="/Donate">Donate</Link>
        <button className="border font-bold text-secondary transition hover:rounded-lg px-4 py-2">Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
