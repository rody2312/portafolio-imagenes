import React from "react";

import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            Mis trabajos
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
            congue felis, non eleifend dolor. Aliquam nec accumsan dolor. In nec
            justo nisl. Vestibulum et odio eget turpis tempor lacinia. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Phasellus
            tincidunt velit est, a venenatis leo feugiat auctor. In varius
            placerat mattis. Cras sem odio, aliquam sed lacinia sit amet,
            posuere at sapien.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
