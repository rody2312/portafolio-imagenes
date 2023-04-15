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
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <p className="text-xl text-accent mb-6 py-4">Asesor Gráfico</p>
            <h1 className="text-4x1 leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px] py-4">
              Soluciones de Diseño
            </h1>
            <p className="py-4 w-11/12">
              Experto en diseño gráfico con experiencia en trabajos con acrílico
              y acero, jaulas y modulares, montajes publicitarios, productos
              para faenas, señalética preventiva y señalética vial. Ofreciendo
              soluciones personalizadas para satisfacer las
              necesidades específicas de cada proyecto.
            </p>
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
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <Carousel
              className="w-full max-w-[600px] h-[400px]"
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
