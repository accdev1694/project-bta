import DonateLink from "./components/DonateLink";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Campaigns from "./components/sections/Campaigns";
import Donate from "./components/sections/Donate";
import Home from "./components/sections/Home";
import Mission from "./components/sections/Mission";
import Team from "./components/sections/Team";
import Testimonials from "./components/sections/Testimonials";
function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Mission />
      <div className="flex my-12 ml-58">
        <DonateLink href="#donate" title="Donate" className="bg-secondary text-white" />
      </div>
      <Campaigns />
      <Team />
      <Donate />
      <Testimonials />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
