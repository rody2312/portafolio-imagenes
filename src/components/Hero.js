import React from "react";
import imgTest from "../assets/img/noimage.webp";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">olasdasd</p>
            <h1 className="text-4x1 leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]">
              ADIOS
            </h1>
            <p>asdasdasdasdasdsads</p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              <Link
                to="portfolio"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300"
              >
                Ver trabajos
              </Link>
            </button>
          </div>
          {/* Right Side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={imgTest}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
