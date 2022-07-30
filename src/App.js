import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./sections/Layout";
import Home from "./sections/Body/Home";
import About from './sections/Body/About'
import Services from './sections/Body/Services';

const App = () => {
    return (
        <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
}

export default App;