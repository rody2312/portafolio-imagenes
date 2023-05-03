import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Project1 from "../assets/projects/MONTAJES PUBLICITARIOS/WhatsApp Image 2021-09-02 at 23.18.25.jpeg";
import Project2 from "../assets/projects/MONTAJES PUBLICITARIOS/WhatsApp Image 2021-09-03 at 09.45.35.jpeg";
import Project3 from "../assets/projects/MONTAJES PUBLICITARIOS/WhatsApp Image 2022-05-10 at 9.00.29 PM.jpeg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen relative bg-primary bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="container mx-auto h-full relative">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Carousel
            className="w-full h-full max-w-full"
            autoPlay
            infiniteLoop
            interval={5000}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
          >
            <div>
              <img
                className="object-cover object-center w-full h-full"
                src={Project1}
                alt="Imagen 1"
              />
            </div>
            <div>
              <img
                className="object-cover object-center w-full h-full"
                src={Project2}
                alt="Imagen 2"
              />
            </div>
            <div>
              <img
                className="object-cover object-center w-full h-full"
                src={Project3}
                alt="Imagen 3"
              />
            </div>
          </Carousel>
        </div>
        <div className="flex items-center justify-center h-full z-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl text-accent mb-6 py-4">Asesor Gráfico</p>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
