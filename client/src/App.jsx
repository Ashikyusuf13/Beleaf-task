import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
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
              <Header />,
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
    </>
  );
};

export default App;
