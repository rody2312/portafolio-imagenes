import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  );
};

export default App;
