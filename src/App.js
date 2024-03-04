import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <div className="mt-16 bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
