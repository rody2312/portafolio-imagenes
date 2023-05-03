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
      className="lg:h-screen flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
      style={{
        backgroundImage: `url(${Project1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >
      <div className="container mx-auto h-full relative">
        <div className="flex items-center h-full pt-8">
          {/* Center Text */}
          <div className="flex-1 flex flex-col items-center justify-center z-10 relative text-center">
            
            {/* Contenido */}
            <h1
              className="text-5xl text-white font-bold mb-4 text-center"
            >
              Asesor grafico
            </h1>
            <p
              className="text-white text-xl mb-8 text-center"
              
            >
              Descripcion
            </p>
            <Link
              to="about"
              smooth={true}
              offset={-80}
              className="bg-secondary text-white py-3 px-6 rounded-full text-xl hover:bg-white hover:text-secondary"
            >
              Trabajos
            </Link>
          </div>
         {/* Background (Carrusel) */}
          <div className="absolute top-0 left-0 w-full h-full z-0">

            <Carousel
              className="w-full h-full absolute top-0 left-0 hero-carousel"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
