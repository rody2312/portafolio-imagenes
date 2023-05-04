import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Project1 from "../assets/projects/SEÑALETICA VIAL/279299447_2751923605114295_3220826292004048532_n.jpg";
import Project2 from "../assets/projects/ACRILICO Y ACERO/20220211_085528 (002).jpg";
import Project3 from "../assets/projects/SEÑALETICA PREVENTIVA  INFORMATIVA/278920963_778235929826127_5869735870933356414_n.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center bg-primary bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full xl:w-3/4 h-full relative">
        <div className="flex items-center justify-center h-full">
          {/* Center Text */}
          <div className="flex flex-col items-center justify-center z-10 absolute inset-0 text-center mx-auto">
            {/* Contenido */}
            <h1 className="text-5xl text-white font-bold mb-4 text-center">
              Asesor gráfico
            </h1>
            <p className="text-white text-xl mb-8 text-center w-2/4 hidden sm:block">
              Experto en asesoría gráfica para empresas de todos los tamaños,
              brindando alternativas de materiales de alta calidad y
              durabilidad, enfocado en ofrecer soluciones eficientes y
              personalizadas para satisfacer las necesidades específicas del
              cliente
            </p>
            <div className="flex space-x-4">
              <Link
                to="portfolio"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="bg-secondary text-white py-3 px-6 rounded-full text-xl hover:bg-white hover:text-secondary hover:cursor-pointer transition-all duration-300"
              >
                Ver trabajos
              </Link>
              <Link
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="bg-secondary text-white py-3 px-6 rounded-full text-xl hover:bg-white hover:text-secondary hover:cursor-pointer transition-all duration-300"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
        {/* Background (Carrusel) */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Carousel
            className="w-full h-full hero-carousel flex flex-col items-center justify-center"
            autoPlay
            infiniteLoop
            interval={5000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
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
    </section>
  );
};

export default Hero;
