import React from "react";

import imgTest from "../assets/img/noimage.webp";

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2x1"
            src={imgTest}
          ></img>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3x1 lg:text-4x1 font-medium lg:font-extrabold mb-3  relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                HOLA
              </h2>
              <p className="mb-4 text-accent">Trabajo</p>

              <hr className="mb-8 opacity-5"></hr>
                <p className="mb-8">Loremimasdas</p>

            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
                Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
