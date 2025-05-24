import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="mt-12 px-36">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
