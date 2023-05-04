import React from "react";
import { MdFiberManualRecord } from "react-icons/md";

import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before: -top-[2rem] before:-left-28 before:hidden before:lg:block">
            Servicios
          </h2>
          <p className="subtitle">
            Los servicios de asesoría gráfica están diseñados para apoyar a
            empresas de todos los tamaños en la búsqueda de soluciones visuales
            efectivas. Se ofrece un enfoque personalizado y flexible que se
            adapte a las necesidades específicas de cada cliente. Algunos de los
            aspectos clave de estos servicios incluyen:
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          {services.map((service, index) => {
            const { name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="flex items-center">
                  <div className="text-accent rounded-md w-4 h-4 mr-10 flex-shrink-0 flex justify-center items-center">
                    <MdFiberManualRecord size="24" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">{name}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
