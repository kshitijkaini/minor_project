import React, { useState } from "react";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button id="popup" onClick={() => setModalOpen(true)}>
        Open Pop-up
      </button>

      {modalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </span>
            <p>
              Put your content here that you want to display in this popup
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;