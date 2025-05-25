import DonateBtn from "./components/DonateBtn";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";
import Campaigns from "./components/sections/Campaigns";
import Contribute from "./components/sections/Contribute";
import Home from "./components/sections/Home";
import Mission from "./components/sections/Mission";
import Partners from "./components/sections/Partners";
function App() {
  return (
    <div className="mt-12">
      <Navbar />
      <Home />
      <Mission />
      <div className="flex my-12 ml-58">
        <DonateBtn />
        <JoinUs />
      </div>
      <Campaigns />
      <Partners />
      <Contribute />
    </div>
  );
}

export default App;
