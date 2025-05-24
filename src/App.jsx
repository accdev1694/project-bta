import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import Mission from "./components/sections/Mission";

function App() {
  return (
    <div className="mt-12">
      <Navbar />
      <Home />
      <Mission/>
    </div>
  );
}

export default App;
