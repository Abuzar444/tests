import React from "react";
import Wrapper from "../assets/wrappers/Modal";

const Modal = ({ onClose, onDelete, title, info }) => {
  return (
    <Wrapper>
      <div className="modal">
        <span className="main-text">{title}</span>
        <span className="info-text">{info}</span>
        <div className="btn-container">
          <button type="button" className="btn cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn" onClick={onDelete}>
            Confirm
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
