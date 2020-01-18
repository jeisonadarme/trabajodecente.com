import React from "react";

const NavComponent = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Trabajodecente.com
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="navbar-nav ml-auto">
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Realizar Consulta
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
