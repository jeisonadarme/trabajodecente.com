import React from "react";
import ContactFormComponent from "./ContactFormComponent";

const ModalComponent = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <ContactFormComponent />
      </div>
    </div>
  );
};

export default ModalComponent;
