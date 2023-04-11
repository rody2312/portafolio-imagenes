import React, { useState, useEffect } from "react";

import { projectsData } from "../data";

import { projectsNav } from "../data";

import Project from "./Project";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Projects = () => {
  const [item, setItem] = useState({ name: "todos" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [projectsToShow, setProjectsToShow] = useState(9);

  useEffect(() => {
    if (item.name.toLowerCase() === "todos") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name.toLowerCase();
      });
      setProjects(newProjects);
    }
  }, [item]);

  useEffect(() => {
    setProjectsToShow(9);
  }, [item]);

  const handleClick = (itemName, index) => {
    setItem({ name: itemName });
    setActive(index);
  };

  const handleShowMore = () => {
    setProjectsToShow((prevProjectsToShow) => prevProjectsToShow + 9);
  };

  return (
    <div>
      {/* nav */}
      <nav className="mb-12 max-w-7xl mx-auto text-center">
        <div className="category-buttons-container">
          {projectsNav.map((category, index) => (
            <button
              key={index}
              className={`category-button ${active === index ? "active" : ""}`}
              onClick={() => handleClick(category.name, index)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </nav>

      <TransitionGroup className="w-full grid lg:grid-cols-3 lg:gap-x-8">
        {projects.slice(0, projectsToShow).map((item) => {
          return (
            <CSSTransition
              key={item.id}
              timeout={500}
              classNames="project-animation"
            >
              <div className="col-span-1">
                <Project item={item} />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
      {projects.length > projectsToShow && (
        <div className="flex justify-center my-4">
          <button onClick={handleShowMore} className="btn btn-md border rounded-lg">
            Ver más
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
