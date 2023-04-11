import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { FaTimes } from "react-icons/fa";


const Project = ({ item }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const customCloseButton = (
    <button className="custom-close-button" onClick={() => setShowModal(false)}>
      <FaTimes />
    </button>
  );

  return (
    <div key={item.id} className="flex flex-col items-center text-center project-image-container">
        <div className="modal-image-container">
          <ModalImage className="project-image cursor-pointer" onClick={handleClick} small={item.image} large={item.image} alt="" />
        </div>
      {/* <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3> */}
      {showModal && (
        <div className="modal-image-container">
          <ModalImage
            small={item.image}
            large={item.image}
            onClose={() => setShowModal(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Project;
