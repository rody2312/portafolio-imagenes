import React from "react";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
            congue felis, non eleifend dolor. Aliquam nec accumsan dolor. In nec
            justo nisl. Vestibulum et odio eget turpis tempor lacinia. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Phasellus
            tincidunt velit est, a venenatis leo feugiat auctor. In varius
            placerat mattis. Cras sem odio, aliquam sed lacinia sit amet,
            posuere at sapien.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="text-accent rounded-md w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
