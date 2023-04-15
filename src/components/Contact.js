import React from "react";
import { contact } from "../data";

const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before: -top-7 before:-left-40 before:hidden before:lg:block">
            Contacto
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            perferendis volm quibusdam ullam qui dolore Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Odio perferendis volm quibusdam
            ullam qui dolore
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {contact.map((item, index) => {
            const { icon, title, subtitle, descripcion } = item;
            return (
              <div className="flex flex-col items-center text-center" key={index}>
                <div className="text-accent rounded-sm w-14 h-14 flex items-center justify-center mb-4 text-2xl">
                  {icon}
                </div>
                <div>
                  <h4 className="font-body text-xl mb-1">{title}</h4>
                  <p className="mb-1">{subtitle}</p>
                  <p className="text-accent font-normal">{descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
