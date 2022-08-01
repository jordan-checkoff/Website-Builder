import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import { pages } from "./UserData";

const App = () => {
    return (
      <>

          <Header />

          <Routes>
            {pages.map((page) => <Route key={page.name} index path={page.link} element={page.component} />)}
          </Routes>

          <Footer />
      
      </>
    )
}

export default App;