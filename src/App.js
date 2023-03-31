import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <div style={{height: '2000px'}}></div>
    </div>
  );
};

export default App;
