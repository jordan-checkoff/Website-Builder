import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./sections/Layout";
import Body from "./sections/Body";
import About from './sections/About'

const App = () => {
    return (
        <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Body />} />
              <Route path="about" element={<About />} />
              {/* <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
}

export default App;