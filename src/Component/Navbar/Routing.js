import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routing;
