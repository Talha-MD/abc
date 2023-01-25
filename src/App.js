import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Invest from "./Component/Invest";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Slider from "./Component/Slider";
import Form from "./Component/Form";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
