import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Headder from "./components/Headder";
import Salesinfo from "./components/Salesinfo";
import Features from "./components/Features";
import Brandlogo from "./components/Brandlogo";
import Roadmap from "./components/roadmap";
import Testimonials from "./components/testimonials";
import Summarytoken from "./components/summarytoken";
import Purchasesection from "./components/purchasesection";
import Availableplatform from "./components/availableplatform";
import Getintouch from "./components/Getintouch";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Headder />,
              <Salesinfo />
              <Features />
              <Brandlogo />
              <Roadmap />
              <Testimonials />
              <Summarytoken />
              <Purchasesection />
              <Availableplatform />
              <Getintouch />
            </>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
