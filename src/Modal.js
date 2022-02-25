import React from "react";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "./App";
const Modal = () => {
  const { isModalOpen, setIsModalOpen } = GlobalContext();
  return (
    <>
      <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
        <div className="modal-container">
          <h3>Modal Content</h3>
          <button
            className="close-modal-btn "
            onClick={() => setIsModalOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
